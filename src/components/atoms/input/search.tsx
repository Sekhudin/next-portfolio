import { SearchIcon } from 'lucide-react';
import HOC from 'src/components/atoms/hoc/icon';
import { Input, InputProps } from 'src/components/ui/input';
import { cn } from 'src/utils';

const Search = HOC(SearchIcon);
const InputSearch = ({ className, disabled, ...props }: InputProps) => (
  <div className={cn(`relative ${disabled && 'cursor-not-allowed'}`)}>
    <Input className={cn(`pr-9`, className)} disabled={disabled} {...props} />
    <Search className="absolute top-1.5 right-2" />
  </div>
);

export default InputSearch;
