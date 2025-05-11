import { useCallback, useRef, useState } from "react";

interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
  translateX: string;
}

export const useDotButton = (): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollSnaps = Array.from({ length: 9 }, (_, index) => index);

  const onDotButtonClick = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const translateX = `translateX(-${selectedIndex * 100}%)`;

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    translateX,
  };
};

export const DotButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, ...props }) => {
  return (
    <button type="button" className={`rounded-full ${className}`} {...props} />
  );
};
