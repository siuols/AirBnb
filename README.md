# AIRBNB with NextJS 13

# Description
This project is a clone of AIRBNB using NextJS 13

# Demo
https://windbnb-olive-theta.vercel.app/trips

## Technology Stack
NextJS 13 and MongoDB

## Prerequisites: 
NodeJS, npm, cloudinary account, mongodb account and configurations of google and github for SSO(Single Sign-On)

## Plugins used:
Node: https://nodejs.org/en/download/package-manager<br />
NextJS: https://nextjs.org/blog/next-13<br />
Next-auth: https://next-auth.js.org/<br />
axios: https://axios-http.com/docs/intro<br />
bcrypt: https://www.npmjs.com/package/bcrypt<br />
date-fns: https://www.npmjs.com/package/date-fns<br />
leaflet: https://leafletjs.com/<br />
tailwind: https://tailwindcss.com/<br />
zustand: https://www.npmjs.com/package/zustand<br />
prisma: https://www.prisma.io/<br />
cloudinary: https://www.npmjs.com/package/next-cloudinary<br />
query-string: https://www.npmjs.com/package/query-string<br />
react hook forms: https://react-hook-form.com/<br />
react-hot-toast: https://react-hot-toast.com/<br />
react-icons: https://react-icons.github.io/react-icons/<br />
react-select: https://react-select.com/home<br />
react-spinners: https://www.davidhu.io/react-spinners/<br />
world countries: https://www.npmjs.com/package/world-countries<br />

## To run the project
1. Clone the app: git clone https://github.com/siuols/AirBnb.git
2. Create Cloudinary, MongoDB and Google Cloud account
3. setup environment variables (.env)
  - DATABASE_URL=<from mongoDB><br />
    GITHUB_ID=<github OAuth><br />
    GITHUB_SECRET=<github OAuth><br />
    GOOGLE_CLIENT_ID=<google OAuth><br />
    GOOGLE_CLIENT_SECRET=<google OAuth><br />
    NEXTAUTH_SECRET="NEXTAUTH_SECRET"<br />
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<cloudinary name><br />
4. Install dependencies ```bash $ npm i ```
5. Run server ```bash $ npm run dev ```
    
## License
Distributed under the MIT License. See [LICENSE.txt](./LICENSE) for more information.
