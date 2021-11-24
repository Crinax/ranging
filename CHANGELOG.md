# v3.0.0

- Refactoring.

- Added `RandomRange`.
- Added more tests.
- Added Wiki.
- Added CHANGELOG.md.

- Removed `merged` getter from `ZipRange`. Use `dict` instead.
- Removed `DateRange` class. Use `MillisecondRange` instead.
- Removed `leepYear` parameter in `DateRangeOptionsT`. Use `leapYear` instead (grammar mistake :D)

- Changed from `ZipRanges` to `ZipRange`.
- Changed from `MergeRanges` to `MergeRange`.

- Fix all bugs with filter function.

# v2.2.0

- For `ZipRanges` use `dict` getter instead a `merged`. `merged` getter is deprecated.
- Added new getter `stringify`.
- Fixed `DateRange` error
- Added more tests
- Fixed approximation error in sum
- Added `product` getter
- Fix `map` function in `DateRange` and other `[TimeUnit]Range`