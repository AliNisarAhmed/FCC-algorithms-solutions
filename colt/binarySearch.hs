module BinarySearch where

  binarySearch :: (Eq a, Ord a) => [a] -> a -> Int
  binarySearch [] _ = -1
  binarySearch arr target = 
    go arr 0
      where
        go xs acc
          | xs == [] = -1 
          | middleElement == target = middle + acc
          | target > middleElement = go (drop (middle + 1) xs) (acc + middle + 1)
          | otherwise = go (take (middle + 1) xs) (acc - middle - 1)
          where
            middle = (length xs) `div` 2
            middleElement = xs !! middle
    
    
    
    
    -- let
    --   middle = (length arr - 1) `div` 2
    --   elem = arr !! middle
    -- in
    --   if elem == target
    --   then middle
    --   else 
    --     if target > elem
    --     then 
    --       binarySearch (drop (middle + 1) arr) target
    --     else 
    --       binarySearch (take (middle + 1) arr) target

  -- the function does not work because we are not
  -- capturing the full length of the array at each
  -- recursion