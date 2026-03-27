import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, eventType, description, guests, date, rooms, remarks } = req.body

  if (!name || !email || !eventType || !guests || !date) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' })
  }

  if (eventType === 'Autre' && !String(description || '').trim()) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' })
  }

  const descriptionRow =
    eventType === 'Autre'
      ? `
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">Description de l'événement</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${String(description).trim()}</td>
      </tr>`
      : ''

  const roomList =
    Array.isArray(rooms) && rooms.length
      ? rooms.map((r) => r.split('/').pop()).join(', ')
      : 'Non spécifié'

  const html = `
    <h2>Nouvelle demande de réservation — CCI Ivato</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif">
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb;width:200px">Nom</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${name}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">E-mail</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb"><a href="mailto:${email}">${email}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">Nature de l'événement</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${eventType}</td>
      </tr>
      ${descriptionRow}
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">Nombre de personnes</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${guests}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">Date de l'événement</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${date}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:bold;border-bottom:1px solid #e5e7eb">Salle(s) souhaitée(s)</td>
        <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb">${roomList}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-weight:bold">Remarques</td>
        <td style="padding:10px 14px">${remarks || '—'}</td>
      </tr>
    </table>
  `

  try {
    await transporter.sendMail({
      from: `"CCI Ivato — Site web" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.MAIL_TO,
      subject: `Demande de réservation — ${eventType} (${name})`,
      html,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Mail send error:', err)
    res.status(500).json({ error: "Échec de l'envoi du mail." })
  }
}
