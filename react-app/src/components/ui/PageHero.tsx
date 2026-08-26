import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './Icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <ol className="breadcrumb">
      {items.map((item, i) =>
        item.href ? (
          <li key={i}><Link to={item.href}>{item.label}</Link></li>
        ) : (
          <li key={i} aria-current="page">{item.label}</li>
        )
      )}
    </ol>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lede: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  metaHtml?: React.ReactNode;
  extra?: React.ReactNode;
}

export function PageHero({ eyebrow, title, lede, breadcrumbs, metaHtml, extra }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="balance">{title}</h1>
        <p className="lede pretty">{lede}</p>
        {metaHtml}
        {extra}
      </div>
    </section>
  );
}

interface CtaBandProps {
  title: string;
  text: string;
  primary?: [string, string];
  secondary?: [string, string];
}

export function CtaBand({
  title, text,
  primary = ['Partner with us', '/get-involved#partner'],
  secondary = ['Support our work', '/support-our-work'],
}: CtaBandProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band" data-reveal="">
          <div className="cta-grid">
            <div>
              <p className="eyebrow eyebrow--teal">Work with the Foundation</p>
              <h2 className="balance">{title}</h2>
              <p className="pretty">{text}</p>
            </div>
            <div className="cluster">
              <Link className="btn btn--accent btn--lg" to={primary[1]}>
                {primary[0]}<ArrowIcon />
              </Link>
              <Link className="btn btn--outline-light btn--lg" to={secondary[1]}>
                {secondary[0]}<ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
