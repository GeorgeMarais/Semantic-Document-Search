# Semantic Search App with Angular, Firebase, and Vertex AI

This project is a **Semantic Search** application that allows users to upload documents and perform natural language queries using **Google Vertex AI**. It is built with **Angular**, styled with **PrimeNG**, and leverages **Firebase** for document storage and hosting. The application provides a smooth user experience for both document upload and retrieval, with advanced semantic search functionality to locate relevant documents based on meaning rather than exact keyword matching.

## Table of Contents

1. [Concept](#concept)
   - [Semantic Search Overview](#semantic-search-overview)
   - [Application Workflow](#application-workflow)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running Locally](#running-locally)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Technologies Used](#technologies-used)
7. [Screenshots](#screenshots)
8. [Contributing](#contributing)
9. [License](#license)

---

## Concept

### Semantic Search Overview

Semantic search is an advanced information retrieval technique that focuses on **understanding the meaning** behind search queries and documents. Unlike traditional keyword-based search, where exact matches are prioritized, semantic search utilizes natural language processing (NLP) and machine learning (ML) techniques to return results based on **contextual relevance**. This means you can input a query in your own words, and the system will return documents that match the **meaning** of your query, even if the documents don’t contain the exact words.

Google Vertex AI, which powers this application's semantic search, leverages deep learning models trained on large datasets to understand the relationships between words and phrases. These models are able to capture **synonyms**, **related concepts**, and **contextual nuances** within the query and documents, leading to more accurate and user-friendly search results.

### Application Workflow

The application revolves around two main components: **Document Upload** and **Semantic Search**.

#### 1. **Document Upload**:
   - Users can upload one or multiple documents.
   - These documents are stored in **Firebase Storage**.
   - Metadata such as the download URL is saved in **Firestore**, making the documents accessible for search.

#### 2. **Semantic Search**:
   - When a user inputs a search query, the query is processed by **Google Vertex AI**.
   - The Vertex AI API performs **semantic analysis** to find documents that are contextually relevant to the query.
   - The results are displayed in a paginated and user-friendly manner.
   
The key intricacies of the app include:
- **Multiple File Types**: The app supports multiple document formats like PDF, DOCX, and TXT. The system can handle and parse these formats for semantic analysis.
- **File Type Filters**: Users can filter their search by specific file types, narrowing down results.
- **Date Range Filters**: Users can search for documents uploaded within specific time periods, making it easier to find relevant content within a date range.
- **Real-Time Feedback**: Progress bars and loaders provide real-time feedback on the status of uploads and searches.
- **Contextual Search**: Instead of matching literal keywords, the app can match **synonyms** and understand complex relationships between words, thanks to Vertex AI.

## Features

- **File Upload**: Drag-and-drop files to upload, with support for multiple file types.
- **Semantic Search**: Search through documents using Google's Vertex AI for context-based retrieval.
- **Real-Time Uploads**: Uploads provide real-time feedback, including progress bars and success notifications.
- **Filter Options**: Search results can be filtered by file type and date range.
- **PrimeNG Styling**: A clean, modern user interface using PrimeNG components for responsiveness and aesthetic design.
- **Paginated Results**: Large result sets are paginated for easy navigation and user experience.
- **Security**: User data and document uploads are stored securely in Firebase.

## Getting Started

### Prerequisites

Before running this project, ensure you have:

- **Node.js** (>= v16)
- **Angular CLI** (>= v15)
- **Firebase CLI**
- A **Google Cloud** account with access to **Vertex AI**

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/semantic-search-app.git
    cd semantic-search-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up Firebase**:

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Enable **Firebase Storage** and **Firestore**.
    - Download your Firebase configuration and place it in `src/environments/environment.ts`:

      ```typescript
      export const environment = {
        firebase: {
          apiKey: 'YOUR_API_KEY',
          authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
          projectId: 'YOUR_PROJECT_ID',
          storageBucket: 'YOUR_PROJECT_ID.appspot.com',
          messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
          appId: 'YOUR_APP_ID',
        },
        production: false,
      };
      ```

4. **Set up Google Cloud Vertex AI**:

    - In the **Google Cloud Console**, enable **Vertex AI** and generate an API key.
    - Add your Vertex AI credentials in `src/environments/environment.ts`:

      ```typescript
      export const environment = {
        vertexAi: {
          apiKey: 'YOUR_VERTEX_AI_API_KEY',
        },
        production: false,
      };
      ```

### Running Locally

To run the application locally:

```bash
ng serve
```

Navigate to `http://localhost:4200/` to view the app in action.

## Testing

The application includes unit tests for key components and services, implemented with **Karma** and **Jasmine**. To run the tests, execute:

```bash
ng test
```

### Test Coverage

- **Document Upload**: Tests the file upload functionality and ensures documents are stored correctly in Firebase.
- **Semantic Search**: Ensures queries are passed correctly to Vertex AI, and the correct results are displayed.
- **UI Components**: Tests the interaction of PrimeNG components and verifies user input and navigation.

## Deployment

You can easily deploy this app to Firebase Hosting with the following steps:

1. **Build the Angular project**:

    ```bash
    ng build --prod
    ```

2. **Deploy to Firebase**:

    ```bash
    firebase login
    firebase init
    firebase deploy
    ```

Your app will now be live on Firebase.

## Technologies Used

- **Angular**: Frontend framework for building dynamic web applications.
- **PrimeNG**: UI library used for rich UI components and responsive design.
- **Firebase**: Backend services for file storage, database, and hosting.
- **Google Vertex AI**: NLP-powered semantic search capability.
- **Karma & Jasmine**: Testing framework for Angular.

## Contributing

If you would like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

Please ensure that your code is well-documented and thoroughly tested.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
