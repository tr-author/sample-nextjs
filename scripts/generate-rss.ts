import fs from 'fs'
import RSS from 'rss'
import { getSortedPostsData } from '@/lib/posts'

const HOST_NAME = process.env.NEXT_PUBLIC_HOST_NAME

if(!HOST_NAME){
    throw new Error("host name couldn't resolved.")
}

const generate = () => {
    const feed = new RSS({
        title: 'Awesome BLOG',
        site_url: HOST_NAME,
        feed_url: `${HOST_NAME}/feed.xml`,
    })

    const postsData = getSortedPostsData()

    postsData.map(post => {
        feed.item({
            title: post.title,
            description: 'dummy',
            guid: post.id,
            url: `${HOST_NAME}/posts/${post.id}`,
            date: new Date(post.published).toString(),
            author: 'katz',
        })
    })

    const rss = feed.xml({indent: true})
    fs.writeFileSync('./.next/static/feed.xml',rss)
}

generate()