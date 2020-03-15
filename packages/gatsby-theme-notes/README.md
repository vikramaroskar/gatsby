<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby notes theme
</h1>

A Gatsby theme for publishing notes to your website.

## Installation

### For a new site

If you're creating a new site and want to use the notes theme, you can use the notes theme starter. This will generate a new site that pre-configures use of the notes theme.

```shell
gatsby new my-themed-notes https://github.com/gatsbyjs/gatsby-starter-notes-theme
```

### Manually add to your site

1. Install the theme

```shell
npm install gatsby-theme-notes
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
        basePath: `/notes`,
      },
    },
  ],
}
```

3. Add notes to your site by creating `md` or `mdx` files inside `/content/notes`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your notes. If you used the above configuration, your URL will be `http://localhost:8000/notes`

### Options

| Key                      | Default value    | Description                                                                      |
| ------------------------ | ---------------- | -------------------------------------------------------------------------------- |
| `basePath`               | `/`              | Root url for all notes pages                                                     |
| `contentPath`            | `/content/notes` | Location of notes content                                                        |
| `mdxOtherwiseConfigured` | `false`          | Set this flag `true` if `gatsby-plugin-mdx` is already configured for your site. |
| `homeText`               | `~`              | Root text for notes breadcrumb trail                                             |
| `breadcrumbSeparator`    | `/`              | Separator for the breadcrumb trail                                               |
