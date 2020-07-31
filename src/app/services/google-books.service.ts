import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIS} from '../constant/api.constant';
import {of, throwError} from 'rxjs';
import {IBook} from '../interfaces/books.interface';
import {catchError, delay, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(private http: HttpClient) { }

  searchBook(query: string) {
    //return of(fakeData);
    return of(query)
      .pipe(
        filter(text => text.length > 2),
        delay(1000),
        distinctUntilChanged(),
        switchMap( res => this.http.get<IBook.RootObject[]>(APIS.BOOKS(query)) ),
        catchError((err, _) => {
          return throwError(err);
        })
      );
  }
}

export const fakeData = {
  "kind": "books#volumes",
  "totalItems": 433,
  "items": [
    {
      "kind": "books#volume",
      "id": "wm7qwAEACAAJ",
      "etag": "a18OBqWzo+A",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/wm7qwAEACAAJ",
      "volumeInfo": {
        "title": "Payback Time",
        "subtitle": "Making Big Money is the Best Revenge!",
        "authors": [
          "Phil Town"
        ],
        "publisher": "Crown Pub",
        "publishedDate": "2010",
        "description": "From the bestselling author of \"Rule #1\" comes a perfectly timed book that shows why a beaten-down market represents the best opportunity to get rich, and it teaches readers how to finally beat the system that failed them.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0307461866"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780307461865"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 275,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=wm7qwAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=wm7qwAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=wm7qwAEACAAJ&dq=phil+town&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=wm7qwAEACAAJ&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Payback_Time.html?hl=&id=wm7qwAEACAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=wm7qwAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "From the bestselling author of &quot;Rule #1&quot; comes a perfectly timed book that shows why a beaten-down market represents the best opportunity to get rich, and it teaches readers how to finally beat the system that failed them."
      }
    },
    {
      "kind": "books#volume",
      "id": "SWjdjDD5v5YC",
      "etag": "jKwQi/obbLI",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/SWjdjDD5v5YC",
      "volumeInfo": {
        "title": "Rule #1",
        "subtitle": "The Simple Strategy for Successful Investing in Only 15 Minutes a Week",
        "authors": [
          "Phil Town"
        ],
        "publisher": "Random House",
        "publishedDate": "2010-03-11",
        "description": "Who's going to provide for your future? There's a crisis looming in pensions. Investing in property is time-consuming and risky. Savings accounts yield very little return. If you're not careful, you could be looking at a very uncomfortable retirement. But surely the alternative - investing in the stock market - is risky, complicated and best left to the professionals? Phil Town doesn't think so. He made a fortune, and in Rule #1 he'll show you how he did it. Rule #1: - Sets out the five key numbers that really count when you're buying stocks and shares - Explains how to use new Internet tools to simplify research - Shows how to exploit the advantages of being an individual investor - Demonstrates how to pay fifty pence for every pound's worth of business This simple and straightforward method will guide you to 15% or better annual returns - in only 15 minutes a week. It's money in the bank!",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781409060048"
          },
          {
            "type": "ISBN_10",
            "identifier": "1409060047"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 320,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 4,
        "ratingsCount": 8,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.8.6.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=SWjdjDD5v5YC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=SWjdjDD5v5YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=SWjdjDD5v5YC&printsec=frontcover&dq=phil+town&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=SWjdjDD5v5YC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=SWjdjDD5v5YC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 43,
          "currencyCode": "ILS"
        },
        "retailPrice": {
          "amount": 43,
          "currencyCode": "ILS"
        },
        "buyLink": "https://play.google.com/store/books/details?id=SWjdjDD5v5YC&rdid=book-SWjdjDD5v5YC&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 43000000,
              "currencyCode": "ILS"
            },
            "retailPrice": {
              "amountInMicros": 43000000,
              "currencyCode": "ILS"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Rule_1-sample-epub.acsm?id=SWjdjDD5v5YC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=SWjdjDD5v5YC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "But surely the alternative - investing in the stock market - is risky, complicated and best left to the professionals? Phil Town doesn&#39;t think so. He made a fortune, and in Rule #1 he&#39;ll show you how he did it."
      }
    },
    {
      "kind": "books#volume",
      "id": "LI6vDgAAQBAJ",
      "etag": "w/CdrAhqvXE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/LI6vDgAAQBAJ",
      "volumeInfo": {
        "title": "Invested",
        "subtitle": "How I Learned to Master My Mind, My Fears, and My Money to Achieve Financial Freedom and Live a More Authentic Life (with a Little Help from Warren Buffett, Charlie Munger, and My Dad)",
        "authors": [
          "Danielle Town",
          "Phil Town"
        ],
        "publisher": "HarperCollins",
        "publishedDate": "2018-03-27",
        "description": "In this essential handbook—a blend of Rich Dad, Poor Dad and The Happiness Project—the co-host of the wildly popular InvestED podcast shares her yearlong journey learning to invest, as taught to her by her father, investor and bestselling author Phil Town. Growing up, the words finance, savings, and portfolio made Danielle Town’s eyes glaze over, and the thought of stocks and financial statements shut down her brain. The daughter of a successful investor and bestselling financial author of Rule #1, Phil Town, she spent most of her adult life avoiding investing—until she realized that her time-consuming career as lawyer was making her feel anything but in control of her life or her money. Determined to regain her freedom, vote for her values with her money, and deal with her fear of the unpredictable stock market, she turned to her father, Phil, to help her take charge of her life and her future through Warren Buffett-style value investing. Over the course of a year, Danielle went from avoiding everything to do with the financial industrial complex to knowing exactly how and when to invest in wonderful companies. In Invested, Danielle shows you how to do the same: how to take command of your own life and finances by choosing companies with missions that match your values, using the same gold standard strategies that have catapulted Warren Buffett and Charlie Munger to the top of the Forbes 400. Avoiding complex math and obsolete financial models, she turns her father’s investing knowledge into twelve easy-to understand lessons. In each chapter, Danielle examines the investment strategies she mastered as her increasing know-how deepens the trust between her and her father. Throughout, she streamlines the process of making wise financial decisions and shows you just how easy—and profitable—investing can be. Capturing a warm, charming, and down-to-earth give and take between a headstrong daughter and her mostly patient dad, Invested makes the complex world of investing simple, straightforward, and approachable, and will help you formulate your own investment plan—and foster the confidence to put it into action.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780062672674"
          },
          {
            "type": "ISBN_10",
            "identifier": "0062672673"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 336,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.9.10.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=LI6vDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=LI6vDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=LI6vDgAAQBAJ&printsec=frontcover&dq=phil+town&hl=&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=LI6vDgAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=LI6vDgAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 65,
          "currencyCode": "ILS"
        },
        "retailPrice": {
          "amount": 64,
          "currencyCode": "ILS"
        },
        "buyLink": "https://play.google.com/store/books/details?id=LI6vDgAAQBAJ&rdid=book-LI6vDgAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 65000000,
              "currencyCode": "ILS"
            },
            "retailPrice": {
              "amountInMicros": 64000000,
              "currencyCode": "ILS"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/Invested-sample-epub.acsm?id=LI6vDgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=LI6vDgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "In Invested, Danielle shows you how to do the same: how to take command of your own life and finances by choosing companies with missions that match your values, using the same gold standard strategies that have catapulted Warren Buffett ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "vqw2AQAAMAAJ",
      "etag": "CaVW8/EPjCY",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/vqw2AQAAMAAJ",
      "volumeInfo": {
        "title": "Tahoe National Forest (N.F.) and Lake Tahoe Management Unit, Eight Eastside Rivers Wild and Scenic River(s) (WSR) Study",
        "subtitle": "Environmental Impact Statement",
        "publishedDate": "1998",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "NWU:35556030821128"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=vqw2AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=vqw2AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=vqw2AQAAMAAJ&pg=SL5-PA86&dq=phil+town&hl=&cd=4&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=vqw2AQAAMAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=vqw2AQAAMAAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FREE",
        "isEbook": true,
        "buyLink": "https://play.google.com/store/books/details?id=vqw2AQAAMAAJ&rdid=book-vqw2AQAAMAAJ&rdot=1&source=gbs_api"
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "ALL_PAGES",
        "embeddable": true,
        "publicDomain": true,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false,
          "downloadLink": "http://books.google.com/books/download/Tahoe_National_Forest_N_F_and_Lake_Tahoe.epub?id=vqw2AQAAMAAJ&hl=&output=epub&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=vqw2AQAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "FULL_PUBLIC_DOMAIN",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "in“. Mayo! l&#39;mphl- umi Agnew Klm A t -mp-mu- I Tony Lalhbrook. (-immunlty \u003cbr\u003e\nDlwlopnnnr November 14, I994 Nevada City, (&quot;A 95959 RE- Eight Eastside \u003cbr\u003e\nRivers E I~S, Dear \u003cb\u003ePhil\u003c/b\u003e. \u003cb\u003eTown\u003c/b\u003e Administrative Office &#39;)ltvSttZ-&#39;HOO H570 Donner l&#39;\u003cbr\u003e\niiss Rind,&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "WroaBQAAQBAJ",
      "etag": "C10RjMujs1M",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/WroaBQAAQBAJ",
      "volumeInfo": {
        "title": "Summary: Rule #1",
        "subtitle": "Review and Analysis of Town's Book",
        "authors": [
          "BusinessNews Publishing"
        ],
        "publisher": "Primento",
        "publishedDate": "2014-10-28",
        "description": "The must-read summary of Phil Town's book: \"Rule #1: The Simple Strategy for Successful Investing in Only 15 Minutes a Week\". This complete summary of the ideas from Phil Town's book \"Rule #1: The Simple Strategy for Successful Investing in Only 15 Minutes a Week\" shares the simple rule that Phil Town used to transform his $1,000 loan into a $1 million investment portfolio: don't lose money. In his book, the author explains how good financiers operate and how to determine the true value of a business. By reading his advice you will have a checklist that you can follow when making an investment to ensure long-lasting success and impressive profits. Added-value of this summary: • Save time • Understand the key concepts • Increase your business knowledge To learn more, read \"Rule #1\" and discover the secret to making a profit on every investment.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9782511019757"
          },
          {
            "type": "ISBN_10",
            "identifier": "2511019752"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 15,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "0.9.10.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=WroaBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=WroaBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=WroaBQAAQBAJ&pg=PA13&dq=phil+town&hl=&cd=5&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=WroaBQAAQBAJ&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Summary_Rule_1.html?hl=&id=WroaBQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=WroaBQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Review and Analysis of Town&#39;s Book BusinessNews Publishing. the first M: \u003cbr\u003e\nMeaning. If the business has no ... \u003cb\u003ePhil Town\u003c/b\u003e “A Rule #1 company will always be \u003cbr\u003e\none that can ride any inflation wave. That&#39;s the purpose of the moat around the \u003cbr\u003e\ncastle:&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "V7kaBQAAQBAJ",
      "etag": "GEpeaDqAJ4I",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/V7kaBQAAQBAJ",
      "volumeInfo": {
        "title": "Summary: Payback Time",
        "subtitle": "Review and Analysis of Town's Book",
        "authors": [
          "BusinessNews Publishing"
        ],
        "publisher": "Primento",
        "publishedDate": "2014-10-28",
        "description": "The must-read summary of Phil Town's book: \"Payback Time: Making Big Money Is the Best Revenge\". This complete summary of the ideas from Phil Town's book \"Payback Time\" shows that, all too often, people put their long-term investment capital into mutual funds and then sit back and hope someone else will make them the millions they need to fund their retirement. In his book, the author offers a better approach to becoming a savvy investor. This summary will teach you the art of \"stockpiling\", which will enable you to invest in the right business at the right time. Added-value of this summary: • Save time • Understand key concepts • Expand your investment knowledge To learn more, read \"Payback Time\" and become an expert at making the right investment and turning a down marketing into an up portfolio.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9782511019696"
          },
          {
            "type": "ISBN_10",
            "identifier": "2511019698"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 15,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.6.8.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=V7kaBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=V7kaBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=V7kaBQAAQBAJ&pg=PT25&dq=phil+town&hl=&cd=6&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=V7kaBQAAQBAJ&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Summary_Payback_Time.html?hl=&id=V7kaBQAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true
        },
        "pdf": {
          "isAvailable": true
        },
        "webReaderLink": "http://play.google.com/books/reader?id=V7kaBQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Review and Analysis of Town&#39;s Book BusinessNews Publishing. SPDR S&amp;P500 \u003cbr\u003e\nor Spiders (ticker symbol ... \u003cb\u003ePhil Town\u003c/b\u003e “Mutual fund companies are not in the \u003cbr\u003e\nstockpiling business or even the investing business. They are in the \u003cbr\u003e\nassetcollection&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "KMPzfDjKfpcC",
      "etag": "lTYRFGvMYq4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/KMPzfDjKfpcC",
      "volumeInfo": {
        "title": "The Making of Dr. Phil",
        "subtitle": "The Straight-Talking True Story of Everyone's Favorite Therapist",
        "authors": [
          "Sophia Dembling",
          "Lisa Gutierrez"
        ],
        "publisher": "John Wiley & Sons",
        "publishedDate": "2004",
        "description": "The first book-length account of media sensation Dr. Phil delves deeply into the life of America's top pop psychologists, from his early days as an athlete and a pilot who pursued a degree in psychology after his first marriage failed. 100,000 first printing. $100,000 ad/promo.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "047146726X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780471467267"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 289,
        "printType": "BOOK",
        "categories": [
          "Biography & Autobiography"
        ],
        "averageRating": 3,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=KMPzfDjKfpcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=KMPzfDjKfpcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=KMPzfDjKfpcC&pg=PA7&dq=phil+town&hl=&cd=7&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=KMPzfDjKfpcC&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Making_of_Dr_Phil.html?hl=&id=KMPzfDjKfpcC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=KMPzfDjKfpcC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Vinita , Dr . \u003cb\u003ePhil\u003c/b\u003e &#39; s birthplace , sits on Route 66 , &quot; America &#39; s Main Street , &quot; in \u003cbr\u003e\nformer frontier country in the ... Trains still frequently rumble through the \u003cb\u003etown\u003c/b\u003e with \u003cbr\u003e\nthroaty whistle blasts , blocking lunchtime traffic as they pass through . “ There isn\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "NIybDbTtufcC",
      "etag": "RB/zQhsJARw",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/NIybDbTtufcC",
      "volumeInfo": {
        "title": "The Louisiana Houses of A. Hays Town",
        "authors": [
          "Cyril E. Vetter"
        ],
        "publisher": "LSU Press",
        "publishedDate": "1999-03-01",
        "description": "A. Hays Town changed the face of the Louisiana house. In a career that includes designing more than five hundred homes, he led architects, builders, and homeowners to embrace the finest elements of Louisiana's architectural past. Almost every home built in Louisiana during the last twenty years is in some way inspired by Town's work. The Louisiana Houses of A. Hays Town honors his legacy as Louisiana's premier residential architect. Color photographs of numerous homes -- including Town's own -- by Philip Gould combined with an illuminating text by Cyril E. Vetter produce a volume that captures the appeal and beauty of the state's finest architectural tradition. Born and raised in rural southwest Louisiana, Hays Town graduated from Tulane University with a degree in architecture in 1926 and worked for a firm in Jackson, Mississippi, for many years. He established his own successful commercial practice in Baton Rouge in 1939, but in the 1960s, Town turned to his abiding passion -- residential architecture. Throughout this chapter of his career, he perfected his inimitable style and emerged as one of the most prominent architects in the South. Town's residential designs are perceptibly influenced by the diverse culture of south Louisiana. His synthesis of the classic Acadian cottage, Spanish courtyards, and exterior French doors with Creole-influenced full-length shutters achieves an original confluence of seemingly disparate yet elegantly balanced themes and forms. Other Town trademarks include pigeonniers, tree alleys, thirteen-foot ceilings, heavy use of such woods as cypress and heart of pine, plantation-style separate structures, and brick floors with a special beeswax finish. The Louisiana Houses of A. Hays Town illuminates the momentous effect Town has had on the look of Louisiana. Crafted from the perspective of two people, Vetter and Gould, who are not architects but admirers of one man's exceptional talent, this delightful book demonstrates that each Town house is a work of art that fits both person and terrain. At the door of each home, proud owners hang a bronze plaque that says it all: A. Hays Town, Architect.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780807123713"
          },
          {
            "type": "ISBN_10",
            "identifier": "0807123714"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 162,
        "printType": "BOOK",
        "categories": [
          "Architecture"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=NIybDbTtufcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=NIybDbTtufcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=NIybDbTtufcC&pg=PR9&dq=phil+town&hl=&cd=8&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=NIybDbTtufcC&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Louisiana_Houses_of_A_Hays_Town.html?hl=&id=NIybDbTtufcC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=NIybDbTtufcC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "PR E FA C E I have wanted to collaborate with \u003cb\u003ePhilip\u003c/b\u003e Gould on a project since I \u003cbr\u003e\nfirst saw his beautiful book Cajun Music and Zydeco (LSU Press, 1992). I knew \u003cbr\u003e\nthat \u003cb\u003ePhilip\u003c/b\u003e would be taken by Mr. \u003cb\u003eTown\u003c/b\u003e and his work. I knew that his photographs\u003cbr\u003e\n&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "ZPxqCwAAQBAJ",
      "etag": "XrSl5ycgBl8",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/ZPxqCwAAQBAJ",
      "volumeInfo": {
        "title": "The Most Loving Place in Town",
        "subtitle": "A Modern Day Parable for the Church",
        "authors": [
          "Ken Blanchard",
          "Phil Hodges"
        ],
        "publisher": "Thomas Nelson",
        "publishedDate": "2016-04-19",
        "description": "eA moving story, told in Ken Blanchard's appealing parable style, of how a local church can be either a blessing or a curse to their community. In this newly revised version, Lead like Jesus for Churches (formerly The Most Loving Place in Town) is the story of two men; a disillusioned church elder and a gifted young pastor, who recognize that their church has lost sight of its number one priority: loving God and each other. They begin a search—independently at first—to recapture their lost love and then together lead their fellowship in a successful discovery of the secret to becoming a beacon of love in their community. By the end of the story you clearly see why this secret—so simple yet so profound—is vital and how to apply it to the life of your church.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780718088729"
          },
          {
            "type": "ISBN_10",
            "identifier": "0718088727"
          }
        ],
        "readingModes": {
          "text": true,
          "image": false
        },
        "pageCount": 208,
        "printType": "BOOK",
        "categories": [
          "Religion"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.3.3.0.preview.2",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=ZPxqCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=ZPxqCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=ZPxqCwAAQBAJ&pg=PA1&dq=phil+town&hl=&cd=9&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=ZPxqCwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ZPxqCwAAQBAJ"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 44,
          "currencyCode": "ILS"
        },
        "retailPrice": {
          "amount": 44,
          "currencyCode": "ILS"
        },
        "buyLink": "https://play.google.com/store/books/details?id=ZPxqCwAAQBAJ&rdid=book-ZPxqCwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 44000000,
              "currencyCode": "ILS"
            },
            "retailPrice": {
              "amountInMicros": 44000000,
              "currencyCode": "ILS"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/The_Most_Loving_Place_in_Town-sample-epub.acsm?id=ZPxqCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=ZPxqCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "Ken and \u003cb\u003ePhil\u003c/b\u003e thank their wives, Margie and Jane, for their loving support on the \u003cbr\u003e\njourney to Lead Like Jesus for Churches. They also extend their gratitude to \u003cbr\u003e\nPhyllis Hendry for her loving leadership of the Lead Like Jesus ministries. Ken \u003cbr\u003e\nhas&nbsp;..."
      }
    },
    {
      "kind": "books#volume",
      "id": "14bM0S5BV7wC",
      "etag": "jQ2eXGd8Ezo",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/14bM0S5BV7wC",
      "volumeInfo": {
        "title": "100 Phil Stories",
        "authors": [
          "Philip Lukens"
        ],
        "publisher": "iUniverse",
        "publishedDate": "2002-05-01",
        "description": "Philip has been invited to parties and events for years to tell everyone his “Phil Stories”. Now they are in this wonderful book. See for yourself the reasons many people find him to be extremely comical.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780595230891"
          },
          {
            "type": "ISBN_10",
            "identifier": "059523089X"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 332,
        "printType": "BOOK",
        "categories": [
          "Family & Relationships"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.2.1.0.preview.3",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=14bM0S5BV7wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=14bM0S5BV7wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=14bM0S5BV7wC&pg=PA12&dq=phil+town&hl=&cd=10&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=14bM0S5BV7wC&dq=phil+town&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/100_Phil_Stories.html?hl=&id=14bM0S5BV7wC"
      },
      "saleInfo": {
        "country": "IL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.com/books/download/100_Phil_Stories-sample-epub.acsm?id=14bM0S5BV7wC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=14bM0S5BV7wC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "\u003cb\u003ePhilip\u003c/b\u003e Lukens. up against the roll bars so that she was secured with an \u003cbr\u003e\novergrown seat belt. I told her to wrap her arms around the roll bars and hang on. \u003cbr\u003e\n... He then asked me if I would drive into \u003cb\u003etown\u003c/b\u003e and check out the suspension on \u003cbr\u003e\nthe clips."
      }
    }
  ]
}
