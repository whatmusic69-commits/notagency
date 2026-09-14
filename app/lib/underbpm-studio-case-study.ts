import type { Lang } from "./language";
import type { CaseStudyCopy } from "./hidy-case-study";

type StudioCopy = Pick<CaseStudyCopy, "kicker" | "headline" | "description" | "imageAlt" | "imageCaption" | "meta" | "problem" | "solution" | "builtTitle" | "features" | "cta"> & { related: string; service: string };

export const underbpmStudioAppUrl = "https://apps.apple.com/app/underbpm-studio/id6790691866";

export const underbpmStudioCaseStudyCopy: Record<Lang, StudioCopy> = {
  "en": {
    "kicker": "Portfolio / iOS / UNDERBPM Studio",
    "headline": "Your studio. In your pocket.",
    "description": "An iOS app for UNDERBPM beatmakers: check statistics, follow sales and upload beats to the marketplace from your phone.",
    "imageAlt": "UNDERBPM Studio App Store page with iPhone screens for the beat catalog, uploads, statistics, profile and sales.",
    "imageCaption": "The producer side of UNDERBPM, brought to iOS.",
    "meta": [
      {
        "label": "Type",
        "value": "Beatmaker app"
      },
      {
        "label": "Platform",
        "value": "iOS"
      },
      {
        "label": "Connected product",
        "value": "UNDERBPM"
      }
    ],
    "problem": {
      "title": "The task",
      "paragraphs": [
        "Beatmakers need to keep track of their music business even when they are away from the computer. The UNDERBPM website needed a mobile companion for everyday producer tasks."
      ]
    },
    "solution": {
      "title": "The solution",
      "paragraphs": [
        "We built UNDERBPM Studio around three core actions: view statistics, check sales and upload new beats for sale. The app brings these parts of the website into a focused mobile workspace."
      ]
    },
    "builtTitle": "A workspace for beatmakers",
    "features": [
      {
        "title": "Statistics",
        "text": "See how your beats are performing from your phone."
      },
      {
        "title": "Sales",
        "text": "Keep track of sales and earnings wherever you are."
      },
      {
        "title": "Beat uploads",
        "text": "Upload new beats to UNDERBPM for sale directly from the app."
      }
    ],
    "related": "Explore the UNDERBPM website case",
    "service": "Mobile app development",
    "cta": {
      "title": "Your platform needs an app?",
      "text": "Let’s bring the tasks your users need every day to mobile.",
      "action": "Discuss a project"
    }
  },
  "ru": {
    "kicker": "Portfolio / iOS / UNDERBPM Studio",
    "headline": "Студия в кармане.",
    "description": "iOS-приложение для битмейкеров UNDERBPM: статистика, продажи и загрузка битов на площадку прямо с телефона.",
    "imageAlt": "Страница UNDERBPM Studio в App Store: экраны каталога битов, загрузки, статистики, профиля и продаж на iPhone.",
    "imageCaption": "Рабочий кабинет битмейкера UNDERBPM — теперь в iOS-приложении.",
    "meta": [
      {
        "label": "Тип",
        "value": "Приложение для битмейкеров"
      },
      {
        "label": "Платформа",
        "value": "iOS"
      },
      {
        "label": "Связанный продукт",
        "value": "UNDERBPM"
      }
    ],
    "problem": {
      "title": "Задача",
      "paragraphs": [
        "Битмейкеру важно следить за своим музыкальным бизнесом и вдали от компьютера. Сайту UNDERBPM требовалось приложение для повседневных задач авторов."
      ]
    },
    "solution": {
      "title": "Решение",
      "paragraphs": [
        "Мы создали UNDERBPM Studio вокруг трёх основных сценариев: посмотреть статистику, проверить продажи и загрузить новый бит для продажи. Эти возможности сайта собраны в мобильном рабочем кабинете."
      ]
    },
    "builtTitle": "Всё для работы с битами",
    "features": [
      {
        "title": "Статистика",
        "text": "Смотреть, как идут дела у ваших битов, прямо с телефона."
      },
      {
        "title": "Продажи",
        "text": "Следить за продажами и доходом, где бы вы ни находились."
      },
      {
        "title": "Загрузка битов",
        "text": "Загружать новые биты на UNDERBPM для продажи прямо из приложения."
      }
    ],
    "related": "Смотреть кейс сайта UNDERBPM",
    "service": "Разработка мобильных приложений",
    "cta": {
      "title": "Вашей платформе нужно приложение?",
      "text": "Перенесём повседневные задачи ваших пользователей в мобильный формат.",
      "action": "Обсудить проект"
    }
  },
  "lv": {
    "kicker": "Portfolio / iOS / UNDERBPM Studio",
    "headline": "Studija tavā kabatā.",
    "description": "iOS lietotne UNDERBPM bītmeikeriem: statistika, pārdošanas dati un bītu augšupielāde platformā tieši no telefona.",
    "imageAlt": "UNDERBPM Studio App Store lapa ar iPhone ekrāniem: bītu katalogs, augšupielāde, statistika, profils un pārdošana.",
    "imageCaption": "UNDERBPM bītmeikera darba vide — tagad iOS lietotnē.",
    "meta": [
      {
        "label": "Tips",
        "value": "Lietotne bītmeikeriem"
      },
      {
        "label": "Platforma",
        "value": "iOS"
      },
      {
        "label": "Saistītais produkts",
        "value": "UNDERBPM"
      }
    ],
    "problem": {
      "title": "Uzdevums",
      "paragraphs": [
        "Bītmeikerim jāseko savam mūzikas biznesam arī prom no datora. UNDERBPM vietnei bija nepieciešama mobilā lietotne autoru ikdienas uzdevumiem."
      ]
    },
    "solution": {
      "title": "Risinājums",
      "paragraphs": [
        "Izveidojām UNDERBPM Studio ap trim galvenajām darbībām: apskatīt statistiku, pārbaudīt pārdošanas datus un augšupielādēt jaunu bītu pārdošanai. Šīs vietnes iespējas apvienojām mobilā darba vidē."
      ]
    },
    "builtTitle": "Darba vide bītmeikeriem",
    "features": [
      {
        "title": "Statistika",
        "text": "Seko savu bītu rezultātiem tieši telefonā."
      },
      {
        "title": "Pārdošana",
        "text": "Pārskati pārdošanas datus un ienākumus, lai kur tu atrastos."
      },
      {
        "title": "Bītu augšupielāde",
        "text": "Augšupielādē jaunus bītus pārdošanai UNDERBPM tieši no lietotnes."
      }
    ],
    "related": "Apskatīt UNDERBPM vietnes projektu",
    "service": "Mobilo lietotņu izstrāde",
    "cta": {
      "title": "Tavai platformai vajadzīga lietotne?",
      "text": "Pārcelsim tavu lietotāju ikdienas uzdevumus uz mobilo vidi.",
      "action": "Pārrunāt projektu"
    }
  }
};
