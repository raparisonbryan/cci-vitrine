<script setup lang="ts">
import { ref, computed } from 'vue'
import { Send, CheckCircle } from 'lucide-vue-next'
import AppButton from '@/components/AppButton.vue'
import { spacesList } from '@/data/spaces'

const form = ref({
  name: '',
  email: '',
  eventType: '',
  description: '',
  guests: '',
  date: '',
  rooms: [] as string[],
  remarks: '',
})

const submitted = ref(false)
const sending = ref(false)
const error = ref('')

const eventTypes = [
  'Spectacle / Concert',
  'Atelier / Workshop',
  'Festival / Événement',
  'Conférence',
  'Séminaire',
  'Banquet / Gala',
  'Exposition / Foire',
  'Réunion professionnelle',
  'Cocktail / Réception',
  'Autre',
]

const roomOptions = computed(() =>
  spacesList.flatMap((space) =>
    space.rooms.map((room) => ({
      value: `${space.slug}/${room.key}`,
      label: `${room.label}`,
      group: space.name,
    })),
  ),
)

const groupedRooms = computed(() => {
  const groups: Record<string, { value: string; label: string }[]> = {}
  for (const opt of roomOptions.value) {
    const g = groups[opt.group] ?? (groups[opt.group] = [])
    g.push({ value: opt.value, label: opt.label })
  }
  return groups
})

const today = computed(() => new Date().toISOString().split('T')[0])

async function onSubmit() {
  sending.value = true
  error.value = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      throw new Error(data?.error || 'Une erreur est survenue.')
    }

    submitted.value = true
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Échec de l'envoi. Veuillez réessayer."
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-hero">
      <div class="container" v-motion-fade>
        <span class="section-label">Contact</span>
        <h1 class="contact-hero__title">Réservez votre espace</h1>
        <p class="contact-hero__desc">
          Remplissez le formulaire ci-dessous et notre équipe vous recontactera dans les plus brefs
          délais pour organiser votre événement.
        </p>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="contact-layout">
          <!-- Sidebar -->
          <aside class="contact-sidebar" v-motion-fade="{ delay: 0.15 }">
            <div class="sidebar-card">
              <h3 class="sidebar-card__title">Informations</h3>
              <ul class="sidebar-card__list">
                <li>
                  <span class="sidebar-card__label">Adresse</span>
                  <span class="sidebar-card__value">CCI Ivato, Antananarivo, Madagascar</span>
                </li>
                <li>
                  <span class="sidebar-card__label">Téléphone</span>
                  <a href="tel:+261320362300" class="sidebar-card__value sidebar-card__link">
                    +261 32 03 623 00
                  </a>
                </li>
                <li>
                  <span class="sidebar-card__label">E-mail</span>
                  <a
                    href="mailto:commercial.cci@madeco.mg"
                    class="sidebar-card__value sidebar-card__link"
                  >
                    commercial.cci@madeco.mg
                  </a>
                </li>
                <li>
                  <span class="sidebar-card__label">Horaires</span>
                  <span class="sidebar-card__value">Lun – Ven : 8h00 – 16h00</span>
                </li>
              </ul>
            </div>
          </aside>

          <!-- Form -->
          <Transition name="form-fade" mode="out-in">
            <form v-if="!submitted" class="contact-form" @submit.prevent="onSubmit" v-motion-fade>
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">Nom complet</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-input"
                    placeholder="Jean Rakoto"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Adresse e-mail</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-input"
                    placeholder="jean@exemple.mg"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="eventType" class="form-label">Nature de l'événement</label>
                  <select
                    id="eventType"
                    v-model="form.eventType"
                    class="form-input form-select"
                    required
                  >
                    <option value="" disabled>Sélectionnez un type</option>
                    <option v-for="t in eventTypes" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="guests" class="form-label">Nombre de personnes</label>
                  <input
                    id="guests"
                    v-model="form.guests"
                    type="number"
                    min="1"
                    class="form-input"
                    placeholder="150"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div v-if="form.eventType === 'Autre'" class="form-group">
                  <label for="email" class="form-label">Description de l'évènement</label>
                  <input
                    id="description"
                    v-model="form.description"
                    type="text"
                    class="form-input"
                    placeholder="Description de l'évènement"
                  />
                </div>
                <div class="form-group">
                  <label for="date" class="form-label">Date de l'événement</label>
                  <input
                    id="date"
                    v-model="form.date"
                    type="date"
                    :min="today"
                    class="form-input"
                    required
                  />
                </div>
              </div>

              <div class="form-group form-group--full">
                <label class="form-label">Salle(s) souhaitée(s)</label>
                <div class="room-picker__grid">
                  <div v-for="(rooms, group) in groupedRooms" :key="group" class="room-picker">
                    <span class="room-picker__legend">{{ group }}</span>
                    <div class="room-picker__options">
                      <label
                        v-for="r in rooms"
                        :key="r.value"
                        class="room-chip"
                        :class="{ 'room-chip--active': form.rooms.includes(r.value) }"
                      >
                        <input
                          type="checkbox"
                          :value="r.value"
                          v-model="form.rooms"
                          class="room-chip__input"
                        />
                        <span class="room-chip__label">{{ r.label }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group form-group--full">
                <label for="remarks" class="form-label">Remarques</label>
                <textarea
                  id="remarks"
                  v-model="form.remarks"
                  class="form-input form-textarea"
                  rows="4"
                  placeholder="Décrivez vos besoins spécifiques (équipements, agencement, restauration…)"
                ></textarea>
              </div>

              <p v-if="error" class="form-error">{{ error }}</p>

              <div class="form-actions">
                <AppButton type="submit" variant="primary" :disabled="sending">
                  {{ sending ? 'Envoi en cours…' : 'Envoyer la demande' }}
                  <Send v-if="!sending" class="icon" />
                </AppButton>
              </div>
            </form>

            <div v-else class="contact-success" v-motion-scale>
              <div class="contact-success__icon">
                <CheckCircle />
              </div>
              <h2 class="contact-success__title">Demande envoyée !</h2>
              <p class="contact-success__desc">
                Merci pour votre demande. Notre équipe vous recontactera pour finaliser les détails
                de votre événement.
              </p>
              <AppButton variant="secondary" @click="submitted = false">
                Envoyer une autre demande
              </AppButton>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-hero {
  padding: 140px 0 60px;
  background: var(--color-bg-subtle);
  border-bottom: 1px solid var(--color-border);
}

.contact-hero__title {
  font-size: var(--font-size-h1);
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 16px;
}

.contact-hero__desc {
  color: var(--color-text-muted);
  line-height: 1.7;
}

/* Layout */
.contact-form-section {
  padding: var(--section-padding);
}

.contact-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  align-items: start;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group--full {
  grid-column: 1 / -1;
}

.form-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
}

.form-input {
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: #fff;
  transition: all var(--transition);
  outline: none;
}

.form-input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(24, 83, 79, 0.08);
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
  cursor: pointer;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  color: #dc2626;
  font-size: var(--font-size-sm);
  padding: 12px 16px;
  background: rgba(220, 38, 38, 0.06);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: var(--radius-lg);
}

.form-actions .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Room picker */
.room-picker__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.room-picker {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.room-picker__options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.room-picker__legend {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-muted);
  white-space: nowrap;
  margin-right: 4px;
}

.room-chip {
  cursor: pointer;
}

.room-chip__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.room-chip__label {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid var(--color-border);
  font-size: var(--font-size-xs);
  color: var(--color-text);
  background: #fff;
  transition: all var(--transition);
  user-select: none;
}

.room-chip:hover .room-chip__label {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.room-chip--active .room-chip__label {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.room-chip--active:hover .room-chip__label {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
  color: #fff;
}

.form-actions {
  padding-top: 8px;
}

.form-actions .btn {
  font-size: var(--font-size-sm);
}

/* Success state */
.contact-success {
  text-align: center;
  padding: 80px 40px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

.contact-success__icon {
  color: var(--color-primary);
  margin-bottom: 24px;
}

.contact-success__icon svg {
  width: 56px;
  height: 56px;
  stroke-width: 1.5;
}

.contact-success__title {
  font-size: var(--font-size-lg);
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
}

.contact-success__desc {
  color: var(--color-text-muted);
  max-width: 420px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

/* Sidebar */
.sidebar-card {
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 36px 32px;
  position: sticky;
  top: 120px;
}

.sidebar-card__title {
  font-size: var(--font-size-md);
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 28px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--color-primary);
}

.sidebar-card__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card__list li {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-card__label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
}

.sidebar-card__value {
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.sidebar-card__link {
  color: var(--color-primary);
  font-weight: 500;
  transition: color var(--transition);
}

.sidebar-card__link:hover {
  color: var(--color-primary-light);
}

/* Transition */
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 0.35s ease;
}

.form-fade-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.form-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .sidebar-card {
    position: static;
  }
}

@media (max-width: 600px) {
  .contact-hero {
    padding: 120px 0 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .room-picker__grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .contact-success {
    padding: 48px 24px;
  }
}
</style>
