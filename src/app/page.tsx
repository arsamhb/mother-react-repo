import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col gap-4 standard-horizontal-padding">
      <h1>AAWIZ</h1>
      <h2>Where Employee Wellness Meets Innovation!</h2>
      <article>
        <p>
          This is a short description of how I implemented the task for the project.
          <br />
          This project is a boilerplate I developed around one year ago, for the purpose of
          minimizing the time required to start a new frontend project. an extensive description of
          its help is included in my resume. but as a summary you can find the following:
          <ul>
            <li>
              <p>
                this project has an on commit hook for linting and formatting the code and a husky
                configured to take a build and prevent the build from failing if the linting and
                formatting fails.
              </p>
            </li>
            <li>
              <p>
                a sample of what I explain to implementing the persister and service and an HOC for
                handling the authentication. and keeping the data exists in the /lib/persister.ts
                and /lib/auth/authService.ts.
              </p>
            </li>
            <li>
              <p>
                you can find my opinionated way of data fetching and talking to backend at
                lib/axiosInstance.ts
              </p>
            </li>
            <li>
              <p>
                also there are other features that I believe they are out of the scope of this task,
                but I will be happy to discuss them in the interview.
              </p>
            </li>
          </ul>
          <br />
          This code base contains basic configuration for reusable components, you can find them in
          src/shared/UI/...
          <br />
          In the src/app/home folder you can find my way of implementing service for the home route.
          It worth to mention that this service implements is for small- to mid-size projects.
          <br />
          Also it worths to mention that my chosen module for handling forms and validations in the
          mixture of Yup and Formik, but due to your requirements for this task I am using Zod and
          React Hook Form.
          <br />
          You can find a documentation for the maintaining and developing this project at{' '}
          <Link href="https://docs.google.com/document/d/1Otvrf0Hg3GgeCDEG4gDBytlBR7NhBXk18JFK-KKNSsk/edit?tab=t.0">
            here
          </Link>
          and the current version of this boilerplate is{' '}
          <Link href="https://github.com/arsamhb/mother-react-repo">here</Link>
        </p>
      </article>
      <Link href="/home">NAVIGATE TO PROJECT PAGE</Link>
    </section>
  );
}
