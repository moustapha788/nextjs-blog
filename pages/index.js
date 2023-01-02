import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date'

/*
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}


Nous avons discuté de deux formes de pré-rendu pour Next.js.

    Génération statique (recommandée) : le code HTML est généré au moment de la construction et sera réutilisé à chaque requête. Pour qu'une page utilise la génération statique, exportez le composant de la page ou exportez getStaticProps(et getStaticPathssi nécessaire). C'est idéal pour les pages qui peuvent être pré-rendues avant la demande d'un utilisateur. Vous pouvez également l'utiliser avec le rendu côté client pour apporter des données supplémentaires.
    Rendu côté serveur : le code HTML est généré à chaque requête . Pour qu'une page utilise le rendu côté serveur, exportez getServerSideProps. Étant donné que le rendu côté serveur entraîne des performances plus lentes que la génération statique, utilisez-le uniquement si cela est absolument nécessaire.

* */


export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello my name is Moustapha Gaye , i'm a software engineer junior . I use JavaScript , the best
                    langage you can use for backend and frontend .</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

import {getSortedPostsData} from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    console.log(allPostsData)
    return {
        props: {
            allPostsData,
        },
    };
}

/*
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}


export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}

import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}

**/