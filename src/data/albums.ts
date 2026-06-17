export interface Photo {
  captionTc?: string;
  id: string;
  url: string;
  caption?: string;
}

export interface Album {
  titleTc?: string;
  descriptionTc?: string;
  id: string;
  title: string;
  description: string;
  coverImage: string;
  photos: Photo[];
}

export const ALBUMS: Album[] = [
  {
    id: "metro-shooting",
    title: "Metro Shooting",
    titleTc: "都會寫真",
    description: "Our elegant pre-wedding shoot captured in urban and metro-themed environments.",
    descriptionTc: "城市霓虹與我們最愛角落的坦率瞬間。",
    coverImage: "https://lh3.googleusercontent.com/d/1nAJ7vYBUSMevCDhGWOQBbQA4ozvI6D4f",
    photos: [
      { id: "ms-1", url: "https://lh3.googleusercontent.com/d/1nAJ7vYBUSMevCDhGWOQBbQA4ozvI6D4f", caption: "Metro Shooting - Photo 1" },
      { id: "ms-2", url: "https://lh3.googleusercontent.com/d/1i8iIAKcb4NVXj51FNkE8J2XN28nK6gJa", caption: "Metro Shooting - Photo 2" },
      { id: "ms-3", url: "https://lh3.googleusercontent.com/d/1EMYUKr2VSdbpTU0-0Vb6JQECa2FhcGJ7", caption: "Metro Shooting - Photo 3" },
      { id: "ms-4", url: "https://lh3.googleusercontent.com/d/1e4NzTVLhxYyHWqC1_G8RaVHNikDHRs8Q", caption: "Metro Shooting - Photo 4" },
      { id: "ms-5", url: "https://lh3.googleusercontent.com/d/1jRoc7ELfXWPTobwRzWOa5bbuQ1eDofRn", caption: "Metro Shooting - Photo 5" },
      { id: "ms-6", url: "https://lh3.googleusercontent.com/d/1bYqVL9vB2TDQiY_dq1l7YFj__XvJhoD0", caption: "Metro Shooting - Photo 6" },
      { id: "ms-7", url: "https://lh3.googleusercontent.com/d/1GLxXyryygIlhnJ8c31r-OGVfLuru2vB8", caption: "Metro Shooting - Photo 7" },
      { id: "ms-8", url: "https://lh3.googleusercontent.com/d/1H9rFdLIstPwAtoy812-Pp8IcHlCkmA_O", caption: "Metro Shooting - Photo 8" },
      { id: "ms-9", url: "https://lh3.googleusercontent.com/d/1P6r78iqEw0OMP2mgKjyczm3_YfF0aTMB", caption: "Metro Shooting - Photo 9" },
      { id: "ms-10", url: "https://lh3.googleusercontent.com/d/175cPKX4-FaIAE1rLOSeyCxQI0yK8t6e8", caption: "Metro Shooting - Photo 10" },
      { id: "ms-11", url: "https://lh3.googleusercontent.com/d/1aRBcFpDSCPdIrgN4tLz6JWRW0GHeHGSj", caption: "Metro Shooting - Photo 11" },
      { id: "ms-12", url: "https://lh3.googleusercontent.com/d/1bsIq70BSlLZaI_HaTWXFds37frscW8FB", caption: "Metro Shooting - Photo 12" },
      { id: "ms-13", url: "https://lh3.googleusercontent.com/d/1oA1ldciN8BWS3JW1qcG0m3rXcNx_tlDr", caption: "Metro Shooting - Photo 13" },
      { id: "ms-14", url: "https://lh3.googleusercontent.com/d/1NRA9Le4Vcj3M1kkkcdaYfNRg9r7-vAYD", caption: "Metro Shooting - Photo 14" },
      { id: "ms-15", url: "https://lh3.googleusercontent.com/d/11mrlvJ5KIpAdX35i4Zm2hlJ6Z6vErfZ6", caption: "Metro Shooting - Photo 15" },
      { id: "ms-16", url: "https://lh3.googleusercontent.com/d/1Pcy-9WVcJiww2yF8Ko0xMzPK62GJmMia", caption: "Metro Shooting - Photo 16" },
      { id: "ms-17", url: "https://lh3.googleusercontent.com/d/16S2uTGqDoNRIs-EspiPrLK3UUejrlZkl", caption: "Metro Shooting - Photo 17" },
      { id: "ms-18", url: "https://lh3.googleusercontent.com/d/1oWaUG4ID1XYTWG9Y2CQvp8At2cr4uiZs", caption: "Metro Shooting - Photo 18" },
      { id: "ms-19", url: "https://lh3.googleusercontent.com/d/1oqejX_gWTNJCtEIZeXxh2Ip7JWNRLkWv", caption: "Metro Shooting - Photo 19" },
      { id: "ms-20", url: "https://lh3.googleusercontent.com/d/1zzARucgfWsVBL0GyCRutEzZTcC6HEdw9", caption: "Metro Shooting - Photo 20" },
      { id: "ms-21", url: "https://lh3.googleusercontent.com/d/1IZ0W022ZDL0J1k8PGXbkEVuX9ywyA2dd", caption: "Metro Shooting - Photo 21" },
      { id: "ms-22", url: "https://lh3.googleusercontent.com/d/1UmohH0E10D2mjBrGrwjjaD5pab_seWbx", caption: "Metro Shooting - Photo 22" },
      { id: "ms-23", url: "https://lh3.googleusercontent.com/d/1IwVjRS7C6nWOVadYGtfCMCdE2YLI4FN2", caption: "Metro Shooting - Photo 23" },
      { id: "ms-24", url: "https://lh3.googleusercontent.com/d/19njcAZpZl4mBIQeNxoQlngLxgmSDmrNC", caption: "Metro Shooting - Photo 24" },
      { id: "ms-25", url: "https://lh3.googleusercontent.com/d/10rEdkcRLqbt95EXzJ39ROq_nYz7SO9bc", caption: "Metro Shooting - Photo 25" },
      { id: "ms-26", url: "https://lh3.googleusercontent.com/d/1gcy3_yyjvX97iXUmyzfDopJePLuR3oFw", caption: "Metro Shooting - Photo 26" },
      { id: "ms-27", url: "https://lh3.googleusercontent.com/d/1Ag32n5wwmXBD6OvzRmCcQ2kgGYwcDjR3", caption: "Metro Shooting - Photo 27" },
      { id: "ms-28", url: "https://lh3.googleusercontent.com/d/1DjWJ2j9teou3gCB9u0d05PU4Qd2Xfj9m", caption: "Metro Shooting - Photo 28" },
      { id: "ms-29", url: "https://lh3.googleusercontent.com/d/1XMilb6obQ3R167v1IwUzjV21b5KAE6dr", caption: "Metro Shooting - Photo 29" },
      { id: "ms-30", url: "https://lh3.googleusercontent.com/d/1R2BAFa-sjn3sURB4W1oY4vjoUTnW_Vck", caption: "Metro Shooting - Photo 30" },
      { id: "ms-31", url: "https://lh3.googleusercontent.com/d/1b1Zv7TXB1BgOaspj5IDpEU7uCm6kkIbO", caption: "Metro Shooting - Photo 31" },
      { id: "ms-32", url: "https://lh3.googleusercontent.com/d/1PUYavLEnuN-y62pLuTa873ihlN0Gdobh", caption: "Metro Shooting - Photo 32" },
      { id: "ms-33", url: "https://lh3.googleusercontent.com/d/1a5rD_WFuvkwMVQxEnXvXy1I3K54oMDmR", caption: "Metro Shooting - Photo 33" },
      { id: "ms-34", url: "https://lh3.googleusercontent.com/d/1o2k48ajriLPpt2XBeobvpbRQBlD4zd9Z", caption: "Metro Shooting - Photo 34" },
      { id: "ms-35", url: "https://lh3.googleusercontent.com/d/1QMQS3_lOVpquSivMTOnCa1bJ3mtj3S65", caption: "Metro Shooting - Photo 35" },
      { id: "ms-36", url: "https://lh3.googleusercontent.com/d/1dHvRoYKA7THUlwqWJ1EJpTS0MIucoZfw", caption: "Metro Shooting - Photo 36" },
      { id: "ms-37", url: "https://lh3.googleusercontent.com/d/1ZCIq3oqd4W8zvPvhsZJoNP9oRjjYLBZ6", caption: "Metro Shooting - Photo 37" },
      { id: "ms-38", url: "https://lh3.googleusercontent.com/d/1Gu42uPMdzXq2gzD1iVu8v3Wl2SE0tJy3", caption: "Metro Shooting - Photo 38" },
      { id: "ms-39", url: "https://lh3.googleusercontent.com/d/175w35N0cyNmoGxaxi0R7GKdWkfsYP2ug", caption: "Metro Shooting - Photo 39" },
      { id: "ms-40", url: "https://lh3.googleusercontent.com/d/1BOj7Lv28V6TU7RkKwpl_uQaYSZXQq1Cz", caption: "Metro Shooting - Photo 40" },
      { id: "ms-41", url: "https://lh3.googleusercontent.com/d/1P15Xcz12rLQ4R1bep6S4F51uLkEgc8kt", caption: "Metro Shooting - Photo 41" },
      { id: "ms-42", url: "https://lh3.googleusercontent.com/d/1OqRhn_rrdA0omaXqGjSSVtuShuHPkHrD", caption: "Metro Shooting - Photo 42" },
      { id: "ms-43", url: "https://lh3.googleusercontent.com/d/1AbbkZzFb2sa6E6E6eEXUDzVrR1wUjDih", caption: "Metro Shooting - Photo 43" },
      { id: "ms-44", url: "https://lh3.googleusercontent.com/d/1EbJo1rgu_aISy7PRhKAp4Damjg_n4ky6", caption: "Metro Shooting - Photo 44" },
      { id: "ms-45", url: "https://lh3.googleusercontent.com/d/1FMsbrM6FXdX32PXF4n2Z_MkKpqICLzsx", caption: "Metro Shooting - Photo 45" },
      { id: "ms-46", url: "https://lh3.googleusercontent.com/d/1iJlFyRgUP38pazwTIo2SPbGRQtiOisq5", caption: "Metro Shooting - Photo 46" },
      { id: "ms-47", url: "https://lh3.googleusercontent.com/d/1hykeY-A_O7CQG8hNoAoplj7_JvdepoSb", caption: "Metro Shooting - Photo 47" },
      { id: "ms-48", url: "https://lh3.googleusercontent.com/d/1wC4JvPkVB8marSoGKKWsMCa7-9MSLdMN", caption: "Metro Shooting - Photo 48" },
      { id: "ms-49", url: "https://lh3.googleusercontent.com/d/1klq91G4KfoQyq3Ljg9tSEHxhbU2mADyy", caption: "Metro Shooting - Photo 49" },
      { id: "ms-50", url: "https://lh3.googleusercontent.com/d/1shed7SVgCPjKAVSBiFCSb3a8NlV5rKQ2", caption: "Metro Shooting - Photo 50" },
      { id: "ms-51", url: "https://lh3.googleusercontent.com/d/1B6HrDL6xTvywNro1DGlIGR9wLG-rBM_w", caption: "Metro Shooting - Photo 51" },
      { id: "ms-52", url: "https://lh3.googleusercontent.com/d/1s1LPx5jlFYXBqimD62dyPEE8uJ_sSsvS", caption: "Metro Shooting - Photo 52" }
    ]
  },
  {
    id: "wedding-shooting",
    title: "Wedding Shooting",
    titleTc: "婚禮紀實",
    description: "Our elegant wedding day portraits and beautiful moments captured together.",
    descriptionTc: "婚禮當日的優雅剪影與我們共同捕捉的美好時刻。",
    coverImage: "https://lh3.googleusercontent.com/d/1B490VJslIZPum472xRxYFu8EZGpEihqK",
    photos: [
      { id: "ws-1", url: "https://lh3.googleusercontent.com/d/1B490VJslIZPum472xRxYFu8EZGpEihqK", caption: "Wedding Shooting - Photo 1" },
      { id: "ws-2", url: "https://lh3.googleusercontent.com/d/1NseOAs_-2JjUi33_kjiaQqtQ1LUO5x7A", caption: "Wedding Shooting - Photo 2" },
      { id: "ws-3", url: "https://lh3.googleusercontent.com/d/1Yb_-124wn3RsY_cYCRpK3cDuarQeCfzC", caption: "Wedding Shooting - Photo 3" },
      { id: "ws-4", url: "https://lh3.googleusercontent.com/d/1IDNTOssJe-UXrjPBK8niQ2bRt8qT5oSE", caption: "Wedding Shooting - Photo 4" },
      { id: "ws-5", url: "https://lh3.googleusercontent.com/d/1hRW2l3IjyTYL49askcQ9v3AToUaWt5I5", caption: "Wedding Shooting - Photo 5" },
      { id: "ws-6", url: "https://lh3.googleusercontent.com/d/1xr0hJsOKRkWDGKzH0MALaa5olZyOOtMj", caption: "Wedding Shooting - Photo 6" },
      { id: "ws-7", url: "https://lh3.googleusercontent.com/d/1TBti_aacmVviGzEEDZOtFCPMAhti_RW6", caption: "Wedding Shooting - Photo 7" },
      { id: "ws-8", url: "https://lh3.googleusercontent.com/d/181mXdNCJ6o8FIZriQqH7HinL1IDlZKgK", caption: "Wedding Shooting - Photo 8" },
      { id: "ws-9", url: "https://lh3.googleusercontent.com/d/1Mz32JJEhR-hmpTzIUXx3EoYncxHsx_hH", caption: "Wedding Shooting - Photo 9" },
      { id: "ws-10", url: "https://lh3.googleusercontent.com/d/1cvZ3hpDUghvDD6NzZHkr3eb91-iTJjXW", caption: "Wedding Shooting - Photo 10" },
      { id: "ws-11", url: "https://lh3.googleusercontent.com/d/1k80ZsZFzT2M9NJSnYHEWaz0wTnngg7us", caption: "Wedding Shooting - Photo 11" },
      { id: "ws-12", url: "https://lh3.googleusercontent.com/d/1kehBwKjfyM6RHZ7GbAqMeCN8HawGDEbo", caption: "Wedding Shooting - Photo 12" },
      { id: "ws-13", url: "https://lh3.googleusercontent.com/d/1LAhsSrpkHE462Yt5B0kq7QwSS-3yG-uZ", caption: "Wedding Shooting - Photo 13" },
      { id: "ws-14", url: "https://lh3.googleusercontent.com/d/1NNbwvnSnnLOZIufERFko8XDSG_CGF8u2", caption: "Wedding Shooting - Photo 14" },
      { id: "ws-15", url: "https://lh3.googleusercontent.com/d/19KMlNC-_suNJg4p-sD4J8rSIfkwXqrmO", caption: "Wedding Shooting - Photo 15" },
      { id: "ws-16", url: "https://lh3.googleusercontent.com/d/1B_TM3wdj-RraMd_2WVwCucsEQUrYqvnA", caption: "Wedding Shooting - Photo 16" },
      { id: "ws-17", url: "https://lh3.googleusercontent.com/d/1nE-T_ZgIOOQTtZgHztJD-mCY_jdz_lM4", caption: "Wedding Shooting - Photo 17" },
      { id: "ws-18", url: "https://lh3.googleusercontent.com/d/1ZL2kCiQZblv5YI-HjHp7nbwYm4P3AFww", caption: "Wedding Shooting - Photo 18" },
      { id: "ws-19", url: "https://lh3.googleusercontent.com/d/1aJoFosjg8wXIyOtkcRnJs-O0kjqsiTp5", caption: "Wedding Shooting - Photo 19" },
      { id: "ws-20", url: "https://lh3.googleusercontent.com/d/1AVSBJ-T0qwTG76070jxWn6Ms5-MwvSgB", caption: "Wedding Shooting - Photo 20" },
      { id: "ws-21", url: "https://lh3.googleusercontent.com/d/1hTNwlZXaa4J-Fq5VcPiVGz_K0QI8MPj9", caption: "Wedding Shooting - Photo 21" },
      { id: "ws-22", url: "https://lh3.googleusercontent.com/d/1QguKOTxeN-ic6pv2XIunVxXxKJVx0zwZ", caption: "Wedding Shooting - Photo 22" },
      { id: "ws-23", url: "https://lh3.googleusercontent.com/d/1Pa146ia73x1Ugv-fQNHbdGfZG4XP5D3f", caption: "Wedding Shooting - Photo 23" },
      { id: "ws-24", url: "https://lh3.googleusercontent.com/d/1ipbMVhCsxiH8n2ZcUatr7EAF8qWAOObW", caption: "Wedding Shooting - Photo 24" },
      { id: "ws-25", url: "https://lh3.googleusercontent.com/d/1pYarHNbq-Onh91vryJ9eUQhfMiaDo8if", caption: "Wedding Shooting - Photo 25" },
      { id: "ws-26", url: "https://lh3.googleusercontent.com/d/1BRfkEVphRgThfjYkHTgbxt9jyDu-8tvm", caption: "Wedding Shooting - Photo 26" },
      { id: "ws-27", url: "https://lh3.googleusercontent.com/d/19DtviI742vCzW0CJBZrzVjEzz7draibJ", caption: "Wedding Shooting - Photo 27" },
      { id: "ws-28", url: "https://lh3.googleusercontent.com/d/1oKLqfOAr5K1-IqZYxlpuP8JBva9rxs1J", caption: "Wedding Shooting - Photo 28" },
      { id: "ws-29", url: "https://lh3.googleusercontent.com/d/1V8Gjng9ZvNTv-4ZPrs0webCKjv_Hxy2X", caption: "Wedding Shooting - Photo 29" },
      { id: "ws-30", url: "https://lh3.googleusercontent.com/d/14vUFGv3MaIeGWO0H3DFZhpU-prFFr-Da", caption: "Wedding Shooting - Photo 30" },
      { id: "ws-31", url: "https://lh3.googleusercontent.com/d/10rfvSWEfYLgLd5Ot-I8xhZjhi7MrbOgt", caption: "Wedding Shooting - Photo 31" },
      { id: "ws-32", url: "https://lh3.googleusercontent.com/d/19KYmKczV8YD1ye08dIJSlfOurm57gv--", caption: "Wedding Shooting - Photo 32" },
      { id: "ws-33", url: "https://lh3.googleusercontent.com/d/1nCqW3HM75PEsnDmJRZiYdAcYYPhKjzIQ", caption: "Wedding Shooting - Photo 33" },
      { id: "ws-34", url: "https://lh3.googleusercontent.com/d/16EhGrN5cxlzkML0mIFn-ELjZ5W-Abqt3", caption: "Wedding Shooting - Photo 34" },
      { id: "ws-35", url: "https://lh3.googleusercontent.com/d/1ZZea0NAOmCBZJiplU0sV8RVOjP-utfF3", caption: "Wedding Shooting - Photo 35" },
      { id: "ws-36", url: "https://lh3.googleusercontent.com/d/1s8eNSarZ4yq-DrDCB-fXchSJ97kbvgKg", caption: "Wedding Shooting - Photo 36" },
      { id: "ws-37", url: "https://lh3.googleusercontent.com/d/1CxqqItp91InhvOZrcfmZix-wWm80PbRJ", caption: "Wedding Shooting - Photo 37" },
      { id: "ws-38", url: "https://lh3.googleusercontent.com/d/1vwgQjS4fjHjGDtmh636CIoW9-ibihCL9", caption: "Wedding Shooting - Photo 38" },
      { id: "ws-39", url: "https://lh3.googleusercontent.com/d/1NFf66VqESbvdc6G_BpKkKg0gUytkQQrO", caption: "Wedding Shooting - Photo 39" },
      { id: "ws-40", url: "https://lh3.googleusercontent.com/d/1ac4m3oFxJtRkLk7phfIVj2L2LZTNPS1q", caption: "Wedding Shooting - Photo 40" },
      { id: "ws-41", url: "https://lh3.googleusercontent.com/d/1bLItJ7Y7RonAkA7imOjUKMta7XCZKEsu", caption: "Wedding Shooting - Photo 41" },
      { id: "ws-42", url: "https://lh3.googleusercontent.com/d/1bxXSwnClMf_Nf5AfFw4GXAcGLYgZrh-q", caption: "Wedding Shooting - Photo 42" },
      { id: "ws-43", url: "https://lh3.googleusercontent.com/d/1tYRwgK4fSgxo4TZNBgf1zxmRnXrFjFZ4", caption: "Wedding Shooting - Photo 43" },
      { id: "ws-44", url: "https://lh3.googleusercontent.com/d/1CKgvEpMx3_Zq6_r1KJ3XNIVOug8k08pd", caption: "Wedding Shooting - Photo 44" },
      { id: "ws-45", url: "https://lh3.googleusercontent.com/d/1bhenIf_lgXtGQgeqN4mp7b_w8upYMFzD", caption: "Wedding Shooting - Photo 45" },
      { id: "ws-46", url: "https://lh3.googleusercontent.com/d/1VeryKcfmImU3lPazeb3pd1elsPFAwNtz", caption: "Wedding Shooting - Photo 46" },
      { id: "ws-47", url: "https://lh3.googleusercontent.com/d/12QeYkz8IwCFW3E2yNls1ECiyj-3jELiX", caption: "Wedding Shooting - Photo 47" },
      { id: "ws-48", url: "https://lh3.googleusercontent.com/d/1qvFLL0wNaTZuYzveHeM2AgFOrU1Q1IJ5", caption: "Wedding Shooting - Photo 48" },
      { id: "ws-49", url: "https://lh3.googleusercontent.com/d/1oOIEeCowrNKZ9gibSPJzqVVud-2OfFqM", caption: "Wedding Shooting - Photo 49" },
      { id: "ws-50", url: "https://lh3.googleusercontent.com/d/172MfUgpnpi1UKiME64Nsg1-RkTU9PYcX", caption: "Wedding Shooting - Photo 50" }
    ]
  }
];
