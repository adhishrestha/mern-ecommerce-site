import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="py-20">
      <Container>
        <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <p className="text-sm font-medium tracking-widest text-primaryMuted uppercase">
            404 Error
          </p>
          <h1 className="mt-2 text-5xl font-bold md:text-7xl text-primary">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-md text-primaryMuted">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>

          <Link to="/">
            <Button
              variant="dark"
              size="md"
              fullWidth
              icon={ArrowLeft}
              iconPosition="left"
              className="mt-6"
            >
              Back to Home
            </Button>
          </Link>
        </section>
      </Container>
    </main>
  );
};

export default NotFound;
