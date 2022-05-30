import { fetchRouteData } from '@store/route';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initState = {
  path: [],
  marker: {},
  rotation: 0,
  sp: 0,
  timestamp: '',
};

export default function useNavigationData({
  speed,
  pause,
  setCenterPoint,
  paueHandler,
}) {
  const dispatch = useDispatch();
  const {
    data,
    loading: isLoading,
    fetched: isFetched,
    startIndex,
    endIndex,
  } = useSelector((store) => store.route);

  const intervelRef = useRef(null);
  const countRef = useRef(0);
  useEffect(() => {
    dispatch(fetchRouteData());
  }, []);

  const [path, setPath] = useState(initState);

  const getDataPoint = useCallback(
    (currentCount) => data.at(startIndex + currentCount),
    [startIndex, data],
  );

  useEffect(() => {
    // reset and set center to first point
    if (startIndex <= endIndex && !isLoading && isFetched) {
      // reset state

      countRef.current = 0;
      const dataPoint = getDataPoint(0);
      const marker = {
        lat: dataPoint.loc.coordinates[0],
        lng: dataPoint.loc.coordinates[1],
      };
      const sp = dataPoint?.sp || '';
      const timestamp = dataPoint?.timestamp && new Date(dataPoint?.timestamp);
      const rotation = dataPoint?.hd || 0;
      setPath({ ...initState, marker, rotation, sp, timestamp });
      setCenterPoint(marker);
      paueHandler(true);
    }
  }, [startIndex, endIndex, isLoading, isFetched, getDataPoint]);

  const count = useMemo(
    () => endIndex - startIndex + 1,
    [endIndex, startIndex],
  );

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

        const rotation = dataPoint?.hd || 0;
        const sp = dataPoint?.sp || '';
        const timestamp =
          dataPoint?.timestamp && new Date(dataPoint?.timestamp);
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
          sp,
          timestamp,
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
