export interface InformationDocument {
  label: string
  href: string
  meta?: string
}

export interface FinancialDocument extends InformationDocument {
  year: number
}

/**
 * Documents publiés (financiers, conditions de location, etc.).
 */
export const documents: FinancialDocument[] = [
  {
    year: 2026,
    label: 'Conditions générales de location (CGL)',
    href: 'https://zlsrehitdajhqraprziz.supabase.co/storage/v1/object/sign/documents/CGL-MADECO-2026.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWFlOWIwZS1iNDA4LTQ5NDQtYjllNC1iZWNkZTk5MWY4MTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2N1bWVudHMvQ0dMLU1BREVDTy0yMDI2LnBkZiIsImlhdCI6MTc3NTcyNTI4NCwiZXhwIjoxOTMzNDA1Mjg0fQ.PRKxEuLI4EQphq845E51MNLtQgartjYSu_-QXGk-3Mk',
    meta: 'PDF',
  },
  {
    year: 2026,
    label: 'Tarifs 2026',
    href: 'https://zlsrehitdajhqraprziz.supabase.co/storage/v1/object/sign/documents/Tarifs%20locations%20salles%20CCI-A4-2026.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV81MWFlOWIwZS1iNDA4LTQ5NDQtYjllNC1iZWNkZTk5MWY4MTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2N1bWVudHMvVGFyaWZzIGxvY2F0aW9ucyBzYWxsZXMgQ0NJLUE0LTIwMjYucGRmIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDAzNTU4NiwiZXhwIjoxODE1NTcxNTg2fQ.JRchi2rBHpXpmwyMMFs_-HNYgrm5ozE333YPz0-7w10',
    meta: 'PDF',
  },
]

/** Appels d'offre, dossiers de consultation, avis, résultats. */
export const appelsOffre: InformationDocument[] = []
