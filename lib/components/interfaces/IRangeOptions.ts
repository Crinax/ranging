export default interface IRangeOptions<EdgeT, ItemT, DateT = EdgeT> {
	start?: EdgeT;
	end?: EdgeT | DateT;
  step?: number;
  count?: number;
  map?: (item: ItemT, index: number) => any;
  filter?: (item: ItemT, index: number) => boolean;
}