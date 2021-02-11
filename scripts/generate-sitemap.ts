import sitemap from 'nextjs-sitemap-generator'

const HOST_NAME = process.env.NEXT_PUBLIC_HOST_NAME

if (!HOST_NAME) {
    throw new Error("host name couldn't resolved.")
  }
  
  const generate = async () => {
    await Promise.resolve(
      sitemap({
        baseUrl: HOST_NAME,
        ignoredExtensions: ['js', 'json', 'map'],
        ignoredPaths: ['index'],
        pagesDirectory: './.next/serverless/pages',
        targetDirectory: './.next/static/',
        extraPaths: [''],
      }),
    )
  }
  
  generate()
