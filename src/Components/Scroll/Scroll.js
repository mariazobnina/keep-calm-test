import { useEffect, useRef } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0)
          && !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0
              && e.deltaY > 0)
        ) {
          e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: `${e.deltaY > 70 ? 'auto' : 'smooth'}`,
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}

export default useHorizontalScroll;
