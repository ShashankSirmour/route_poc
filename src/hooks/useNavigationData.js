import { fetchRouteData } from '@store/route';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function findGreatestAndSmallestIndex(arr, target, smallest) {
  let low = 0;

  let high = arr.length - 1;
  while (low !== high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  if (smallest && low !== 0 && arr[arr.length - 1] > target) {
    return low - 1;
  }
  return low;
}

export default function useNavigationData({ speed, pause, setCenterPoint }) {
  const dispatch = useDispatch();
  const {
    data,
    loading: isLoading,
    fetched: isFetched,
  } = useSelector((store) => store.route);
  const intervelRef = useRef(null);
  const countRef = useRef(0);
  useEffect(() => {
    dispatch(fetchRouteData());
  }, []);

  const count = useMemo(() => data.length, [data]);

  const [path, setPath] = useState({
    path: [],
    marker: {},
    rotation: 0,
  });

  const getDataPoint = useCallback((index) => data.at(index), [data]);

  useEffect(() => {
    if (count > 0 && countRef.current <= count && !pause) {
      let duration = 1000;
      if (speed > 0) {
        duration = 1000 / speed;
      }

      intervelRef.current = setInterval(() => {
        if (pause) {
          clearInterval(intervelRef.current);
        }
        const dataPoint = getDataPoint(countRef.current);
        const paths =
          dataPoint?.multi_geo?.reduce((arr, m) => {
            if (m.geocode?.lat && m.geocode?.lng) {
              arr.push(m.geocode);
            }
            return arr;
          }, []) || [];

        const rotation = dataPoint?.sp || 0;
        const marker = {
          lat: dataPoint.loc.coordinates[0],
          lng: dataPoint.loc.coordinates[1],
        };

        if (countRef.current % 6 === 0) {
          setCenterPoint(marker);
        }
        setPath((p) => ({
          path: [...p.path, ...paths],
          marker,
          rotation,
        }));

        countRef.current += 1;
        if (countRef.current >= count && intervelRef.current) {
          clearInterval(intervelRef.current);
        }
      }, duration);
    }
    return () => intervelRef.current && clearInterval(intervelRef.current);
  }, [speed, count, getDataPoint, pause]);

  return { path, isLoading, isFetched };
}
