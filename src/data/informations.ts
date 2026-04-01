export interface InformationDocument {
  label: string
  href: string
  meta?: string
}

export interface FinancialDocument extends InformationDocument {
  /** Année de référence (ex. exercice comptable). */
  year: number
}

/**
 * Comptes annuels, rapports d’activité, etc.
 * Les entrées sont affichées regroupées par année (plus récent en premier).
 */
export const documentsFinanciers: FinancialDocument[] = []

/** Dossiers de consultation, avis, résultats — ajoutez les entrées ici. */
export const appelsOffre: InformationDocument[] = []
