[![Netlify Status](https://api.netlify.com/api/v1/badges/280deb73-e156-48c2-9181-defea62630bb/deploy-status)](https://app.netlify.com/sites/social-card-image/deploys)

## Social Card Image Creator

[Tutorial can be found here][tutorial]

`http://localhost:3000/?title=This%20is%20the%20title!&width=1024px&height=512px`

[![](https://www.netlify.com/img/deploy/button.svg)][deploy]

It will fail until you change the `cardpath` in the `netlify/functions/create-card.js` file or pass the imagepath in your query string parameter to your site's card location.

---

This project was bootstrapped with [Create React App][create-react-app].

[deploy]: https://app.netlify.com/start/deploy?repository=https://github.com/talves/social-card-image
[create-react-app]: https://github.com/facebook/create-react-app
[tutorial]: https://tony.alves.dev/garden/netlify-react-social-card
