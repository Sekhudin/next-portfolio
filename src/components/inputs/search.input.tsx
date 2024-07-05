import { SearchIcon } from 'lucide-react';
import HOC from 'components/HOCs/icon.hoc';
import { Input, InputProps } from 'packages/ui/input';
import { cn } from 'packages/utils/cn';

const Search = HOC(SearchIcon);
const SearchInput = ({ className, disabled, ...props }: InputProps) => (
  <div className={cn(`relative ${disabled && 'cursor-not-allowed'}`)}>
    <Input className={cn(`pr-9`, className)} disabled={disabled} {...props} />
    <Search className="absolute top-1.5 right-2" />
  </div>
);

export default SearchInput;
