# v4.1.0

- add function analogs for classes
- fix typings for ZipRange

# v4.0.2

- fix readme

# v4.0.1

- fix exports

# v4.0.0

- New syntax

# v3.0.4

- fix: exports

# v3.0.3

- Removed useless imports from index.mjs

# v3.0.2

- Removed logining

# v3.0.1

- Fixed [Double value in ShuffleRange #6](https://github.com/Crinax/ranging/issues/6)

# v3.0.0

- Refactoring.

- Added random ranges.
  - `RandomNumberRange`.
  - `RandomCharRange`.
  - `RandomStringRange`.
  - `RandomDateRange`.
  - `RandomColorRange`.
- Added `ShuffleRange`.
- Added more tests.
- Added Wiki.
- Added CHANGELOG.md.

- Removed `merged` getter from `ZipRange`. Use `dict` instead.
- Removed `DateRange` class. Use `MillisecondRange` instead.
- Removed `leepYear` parameter in `DateRangeOptionsT`. Use `leapYear` instead (grammar mistake :D).
- Removed `Range`.

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
