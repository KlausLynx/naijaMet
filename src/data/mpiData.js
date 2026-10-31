// Nigeria petroleum export revenue, US$ billion (current).
// 1960-2006: World Bank (via K-State Table 4, in US$ million / 1000).
// 2008-2010, 2014-2019: OPEC Annual Statistical Bulletin (value of petroleum exports).
// null = I could not verify a figure. Fill from OPEC ASB, Table 2.x 'Values of petroleum exports' (opec.org).
// In recharts use <Line connectNulls /> so gaps join up.
export const nigeriaCrudeOilRevenue = [
  { year: 1960, revenueUSDBillion: 0.012 },
  { year: 1961, revenueUSDBillion: 0.032 },
  { year: 1962, revenueUSDBillion: 0.048 },
  { year: 1963, revenueUSDBillion: 0.057 },
  { year: 1964, revenueUSDBillion: 0.09 },
  { year: 1965, revenueUSDBillion: 0.191 },
  { year: 1966, revenueUSDBillion: 0.258 },
  { year: 1967, revenueUSDBillion: 0.199 },
  { year: 1968, revenueUSDBillion: 0.109 },
  { year: 1969, revenueUSDBillion: 0.422 },
  { year: 1970, revenueUSDBillion: 0.718 },
  { year: 1971, revenueUSDBillion: 1.375 },
  { year: 1972, revenueUSDBillion: 1.803 },
  { year: 1973, revenueUSDBillion: 3.049 },
  { year: 1974, revenueUSDBillion: 8.997 },
  { year: 1975, revenueUSDBillion: 7.744 },
  { year: 1976, revenueUSDBillion: 9.444 },
  { year: 1977, revenueUSDBillion: 11.561 },
  { year: 1978, revenueUSDBillion: 9.452 },
  { year: 1979, revenueUSDBillion: 15.624 },
  { year: 1980, revenueUSDBillion: 24.931 },
  { year: 1981, revenueUSDBillion: 17.291 },
  { year: 1982, revenueUSDBillion: 11.883 },
  { year: 1983, revenueUSDBillion: 9.941 },
  { year: 1984, revenueUSDBillion: 11.534 },
  { year: 1985, revenueUSDBillion: 12.568 },
  { year: 1986, revenueUSDBillion: 4.77 },
  { year: 1987, revenueUSDBillion: 7.024 },
  { year: 1988, revenueUSDBillion: 6.267 },
  { year: 1989, revenueUSDBillion: 7.47 },
  { year: 1990, revenueUSDBillion: 13.265 },
  { year: 1991, revenueUSDBillion: 11.792 },
  { year: 1992, revenueUSDBillion: 11.642 },
  { year: 1993, revenueUSDBillion: 10.859 },
  { year: 1994, revenueUSDBillion: 11.04 },
  { year: 1995, revenueUSDBillion: 11.512 },
  { year: 1996, revenueUSDBillion: 14.888 },
  { year: 1997, revenueUSDBillion: 14.391 },
  { year: 1998, revenueUSDBillion: 8.754 },
  { year: 1999, revenueUSDBillion: 12.453 },
  { year: 2000, revenueUSDBillion: 20.04 },
  { year: 2001, revenueUSDBillion: 17.188 },
  { year: 2002, revenueUSDBillion: 17.083 },
  { year: 2003, revenueUSDBillion: 22.184 },
  { year: 2004, revenueUSDBillion: 33.309 },
  { year: 2005, revenueUSDBillion: 46.77 },
  { year: 2006, revenueUSDBillion: 52.52 },
  { year: 2007, revenueUSDBillion: null },  // unverified
  { year: 2008, revenueUSDBillion: 74.033 },  // OPEC ASB 2010/11
  { year: 2009, revenueUSDBillion: 43.623 },  // OPEC ASB 2010/11
  { year: 2010, revenueUSDBillion: 61.804 },  // OPEC ASB 2010/11
  { year: 2011, revenueUSDBillion: null },  // unverified
  { year: 2012, revenueUSDBillion: null },  // unverified
  { year: 2013, revenueUSDBillion: null },  // unverified
  { year: 2014, revenueUSDBillion: 75.196 },  // OPEC ASB 2019
  { year: 2015, revenueUSDBillion: 41.168 },  // OPEC ASB 2019
  { year: 2016, revenueUSDBillion: 27.295 },  // OPEC ASB 2019
  { year: 2017, revenueUSDBillion: 37.983 },  // OPEC ASB 2019
  { year: 2018, revenueUSDBillion: 54.513 },  // OPEC ASB 2019
  { year: 2019, revenueUSDBillion: 45.11 },  // OPEC ASB 2020
  { year: 2020, revenueUSDBillion: 27 },  // approx, OPEC ASB 2021 as reported by ThisDay
  { year: 2021, revenueUSDBillion: null },  // unverified
  { year: 2022, revenueUSDBillion: null },  // unverified
  { year: 2023, revenueUSDBillion: 45.6 },  // approx, CRUDE ONLY (trade data), not the OPEC petroleum total
  { year: 2024, revenueUSDBillion: null },  // unverified
];