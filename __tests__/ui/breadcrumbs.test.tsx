import { render, screen } from '@testing-library/react';
import Breadcrumbs from '../../app/ui/breadcrumbs';
import '@testing-library/jest-dom'

test('renders breadcrumbs correctly', () => {
  const breadcrumbs = [
    { href: '/home', label: 'Home', active: false },
    { href: '/about', label: 'About', active: true },
    { href: '/contact', label: 'Contact', active: false },
  ];

  render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

  const breadcrumbElements = screen.getAllByRole('listitem');
  expect(breadcrumbElements).toHaveLength(breadcrumbs.length);

  breadcrumbElements.forEach((element, index) => {
    const breadcrumb = breadcrumbs[index];
    expect(element).toHaveTextContent(breadcrumb.label);
    expect(element).toHaveAttribute(
      'aria-current',
      breadcrumb.active ? 'page' : undefined
    );
  });
});