async function fetchAPI(query, { variables } = {}) {
   const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         query,
         variables,
      }),
   })

   const json = await res.json()
   if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
   }

   return json.data
}

export async function getAllArticlesWithSlug() {
   const data = fetchAPI(`
      {
         articles {
            slug
         }
      }
   `)
   return data
}

export async function getAllArticlesForHome() {
   const data = await fetchAPI(
      `
      query Articles($where: JSON){
         articles(sort: "date:desc", limit: 3, where: $where) {
            id
            title
            slug
            date
            author {
               name
               picture {
                  formats
               }
            }
         }
      }
   `,
      {
         variables: {
            where: {
               ...({ status: 'published' }),
            },
         },
      }
   )
   return data
}

export async function getArticles(slug) {
   const data = await fetchAPI(
   `
      query ArticlesBySlug($where: JSON) {
         articles(where: $where) {
            id
            title
            slug
            content
            date
            coverImage {
               formats
            }
            author {
               name
               picture {
                  formats
               }
            }
         }
      }
   `,
      {
         variables: {
            where: {
               slug,
               ...({ status: 'published' }),
            },
         },
      }
   )
   return data
}