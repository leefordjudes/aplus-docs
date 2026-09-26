import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

function HeadingNoResult() {
  return (
    <Heading as="h2">No result</Heading>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

// export default function ShowcaseCards() {
//   const filteredUsers = useFilteredUsers();

//   if (filteredUsers.length === 0) {
//     return <NoResultSection />;
//   }

//   return (
//     <section className="margin-top--lg margin-bottom--xl">
//       {filteredUsers.length === sortedUsers.length ? (
//         <>
//           <div className={styles.showcaseFavorite}>
//             <CardList heading={<HeadingFavorites />} items={favoriteUsers} />
//           </div>
//           <div className="margin-top--lg">
//             <CardList heading={<HeadingAllSites />} items={otherUsers} />
//           </div>
//         </>
//       ) : (
//         <CardList items={filteredUsers} />
//       )}
//     </section>
//   );
// }