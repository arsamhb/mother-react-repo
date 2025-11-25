import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col gap-4 standard-horizontal-padding">
      <h1 className="text-2xl font-bold">AAWIZ</h1>
      <h2 className="text-xl font-bold">Where Employee Wellness Meets Innovation!</h2>
      <article className="flex flex-col gap-md">
        <p>This is a short description of how I implemented the task for the project.</p>
        <p>
          This project is developed on a boilerplate, which I developed around one year ago, for the
          purpose of minimizing the time required to start a new frontend project. an extensive
          description of its help is included in my resume.
        </p>
        <p>
          You can find a documentation for the original boilerplate at{' '}
          <Link
            className="text-primary underline"
            href="https://docs.google.com/document/d/1Otvrf0Hg3GgeCDEG4gDBytlBR7NhBXk18JFK-KKNSsk/edit?tab=t.0"
          >
            project documentation
          </Link>{' '}
          and the current version of this boilerplate is available on GitHub at{' '}
          <Link
            className="text-primary underline"
            href="https://github.com/arsamhb/mother-react-repo"
          >
            github.com/arsamhb/mother-react-repo
          </Link>
          .
        </p>
        <p>
          for checking the dashboard for fetching data with from jsonplaceholder API for you can
          navigate to the dashboard by clicking the button below:
          <Link className="text-primary underline" href="/dashboard">
            NAVIGATE TO DASHBOARD
          </Link>
        </p>
        <p>
          for checking the form working with react-hook-form and Zod you can navigate to the form by
          clicking the button below:
          <Link className="text-primary underline" href="/form">
            NAVIGATE TO FORM
          </Link>
        </p>
        <p>also both links are availabe at top navbar</p>
      </article>
    </section>
  );
}
