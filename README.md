# Huni Portfolio

Welcome to my personal portfolio website! This project showcases my work, projects, and skills using modern web technologies. It is designed for fast performance, easy content management, and a beautiful, responsive user experience.

## Live Demo

You can view the live version of the portfolio at [huni-portfolio.vercel.app](https://huni-portfolio.vercel.app).

## Technologies Used

-   **Next.js** (v14): React framework for server-rendered and static web applications
-   **TypeScript**: Strongly-typed JavaScript for safer, scalable code
-   **MDX**: Markdown + JSX for rich content authoring
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development
-   **Radix UI**: Accessible, composable UI primitives
-   **React Hook Form**: Forms and validation
-   **Zod**: TypeScript-first schema validation
-   **Resend**: Email sending integration
-   **Sonner**: Toast notifications

## File & Directory Structure

```
├── app/                # Main Next.js app directory (routing, pages, layouts)
│   ├── contact/        # Contact form page
│   ├── posts/          # Blog posts listing and details
│   ├── projects/       # Projects listing and details
│   ├── layout.tsx      # Root layout component
│   ├── globals.css     # Global styles
│   └── ...
├── components/         # Reusable React components (UI, layout, forms, etc.)
│   └── ui/             # UI primitives/components
├── content/            # Markdown/MDX content (blog posts, projects)
│   ├── posts/          # Individual blog post files
│   └── projects/       # Individual project files
├── emails/             # Email templates
├── lib/                # Utility libraries (data fetching, helpers, schemas)
├── public/             # Static assets (images, icons, etc.)
├── styles/             # Additional global or modular styles (if any)
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.mjs     # Next.js configuration
└── README.md           # Project documentation
```

## Key Pages & Features

-   **Homepage**: Introduction, featured projects, and latest blog posts
-   **Projects**: Showcase of personal and professional projects with details
-   **Blog**: Technical articles and personal insights (written in MDX)
-   **Contact**: Contact form with email integration
-   **Dark/Light Mode**: Theme toggle for user preference
-   **Search**: Quickly find posts and projects
-   **Responsive Design**: Mobile-first and desktop-friendly

## Content Management

-   Add or edit blog posts in `content/posts/` using MDX format
-   Add or edit projects in `content/projects/` using MDX format

## Deployment

This site is easily deployable to platforms like Vercel or Netlify.

1. **Build the project:**
    ```bash
    npm run build
    # or
    yarn build
    ```
2. **Set environment variables** (if needed for email, analytics, etc.)
3. **Deploy to your preferred platform**

## SEO & Analytics

-   Optimized for SEO with meta tags and Open Graph support
-   Easily add analytics (Google Analytics, Plausible, etc.)

## Accessibility

-   Built with accessibility best practices in mind (semantic HTML, keyboard navigation, etc.)

## Features

-   ⚡ **Blazing fast**: Server-side rendering and static generation
-   📱 **Responsive**: Looks great on all devices
-   ✍️ **MDX Content**: Write posts and projects in Markdown with React components
-   🎨 **Customizable**: Powered by Tailwind CSS
-   🌗 **Theme support**: Light/dark mode toggle
-   📬 **Contact Form**: Integrated with email sending
-   🔍 **Search**: Quickly find posts and projects

## Getting Started

To run the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/erik-ng-3006/huni-portfolio.git
    cd huni-portfolio
    ```
2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

-   Add/edit your projects and posts in the `content/` directory using MDX.
-   Update site metadata and configuration in `app/layout.tsx` or other config files.
-   Customize styles in `tailwind.config.ts` and `app/globals.css`.

## Roadmap / Future Plans

-   Add more interactive components
-   Integrate more social links
-   Improve animation and transitions
-   Add more automated tests

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for suggestions and improvements.

## Credits & Acknowledgements

-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Radix UI](https://www.radix-ui.com/)
-   [MDX](https://mdxjs.com/)
-   [Resend](https://resend.com/)
-   [Sonner](https://sonner.emilkowal.ski/)

## Contact & Social Links
-   [Facebook](https://www.facebook.com/erikng306)
-   Email: erikng3006@gmail.com

## License

This project is open-source and available under the [MIT License](LICENSE).
