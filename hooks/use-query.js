import { useMemo } from 'react';
import qs from 'query-string';
import { useRouter } from 'next/router';

export default function useQuery() {
  const router = useRouter();

  const queryString = useMemo(() => qs.parse(router.query), [router.query]);
  return queryString;
}
