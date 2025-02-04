import { Phone } from "lucide-react"

const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${9569668800}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 text-white p-4 md:p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center w-12 h-12 md:w-auto md:h-auto"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}

export default WhatsAppButton