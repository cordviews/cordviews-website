import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Trusted Reviews',
    description: (
      <>
        Instead of having reviews from random sources, you get one or two reviews tailored for your server <strong>for everyone to see</strong>, perfectly written by one of our trusted Reviewers.
      </>
    ),
  },
  {
    title: 'Trusted Feedback',
    description: (
      <>
        With our trusted reviews for public, we also ship with trusted feedback <strong>for server admins</strong>. These feedback allows server admins and owners to further improve on their servers, without worrying about the public face in reviews.
      </>
    ),
  },
  {
    title: 'Proven To Work',
    description: (
      <>
        Real reviews and testimonals has proven that Cordviews is a legitimate way to grow your server organically, instead of random users who only join to expect <strong>something else</strong> in return, not your <strong>server's distinctives</strong>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
