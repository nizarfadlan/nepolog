# Nepolog

Nepolog is a Portfolio and Blog website created with [Next.JS](https://nextjs.org/) for Blogs using [Strapi](https://strapi.io/).

## Demo

[https://nepolog.vercel.app/](https://nepolog.vercel.app/)

## How to use

```bash
git clone https://github.com/nizariyf/nepolog my-project
cd my-project
npm install
```

## Run :rocket:

### :rocket: Development

```bash
npm run dev # run development
```

### :rocket: Production

```bash
npm run build # create .next directory
npm run start # start server
```

## Configuration Strapi

### Set up Strapi locally

[Follow the instructions on this page](https://strapi.io/documentation/v3.x/installation/cli.html) to create a Strapi project locally.

### Create an `Author` collection

From **Content-Types Builder**, **create a new collection type**.

- The display name should be `Author`.

Next, add these fields (you don't have to modify the settings):

- **Text** field called **`name`** (**Short text**)
- **Media** field called **`picture`** (**Single media**)

Then click **Save**.

### Create a `Post` collection

From **Content-Types Builder**, **create a new collection type**.

- The display name should be `Post`.

Next, add these fields (you don't have to modify the settings unless specified):

- **Text** field called **`title`** (**Short text**)
- **Rich Text** field called **`content`** (**Multiple-paragraph Text**)
- **Text** field called **`excerpt`** (**Long text**)
- **Media** field called **`coverImage`** (**Single media**)
- **Date** field called **`date`** (type should be **date**)
- **UID** field called **`slug`** (attached field should be **title**)
- **Relation** field called **`author`** (Post **has one** Author)
- **Enumeration** field `status` (the values should be **published** and **draft**)

### Set permissions

From **Settings, Users & Permissions, Roles**, edit the **Public** role.

Then select: `count`, `find`, and `findone` permissions for both **Author** and **Post**. Click **Save**.


##### Note
> There are still many shortcomings so apologize if something is missing or imperfect because I myself have just learned Next.JS
