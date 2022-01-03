Date of birth validator made with react-hook-form. If the user date of birth input indicates an age less than 18 years old, the validator would reset the date of birth as of today minus 18 years. User gets notified, that the age should be at least 18 years and the the date of birth has been reset. 

Try it out by choosing any birth year different from the current year - 18. Choose birth month different from the current one. Then set birth year again to the maximum possible. The date will reset. You'll see the warning. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

CSS: [Tailwind CSS](https://tailwindcss.com/)

Date handling: [date-fns](https://date-fns.org/)

## Getting Started

First, run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
