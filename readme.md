# Web UI

Web UI: [https://chat.thenextblock.com/](https://chat.thenextblock.com/)

## Overview

TheNextBlock provides a QnA API which allows you to submit a question and retrieve related documents from the Vector database.

## API Base URL

The base URL for the API is: `https://w3search.thenextblock.com/api/v1/`

## Request Method

- POST

## Request Body

The request body contains three parameters:

- `question` (string): The question to retrieve related documents from the database.
- `maxdocs` (string): The maximum number of documents to retrieve from the database.
- `filter` (object): This feature is not yet implemented.

Example:

```json
{
  "question": "What is the Distributed Validators Network, and how many DVT protocols currently exist in the Ethereum staking landscape?",
  "collection": "discord",
  "filters": [],
  "maxdocs": "200",
  "model": "gpt-3.5-turbo-16k"
}
```

## CURL Request

```bash
    curl --location 'https://w3search.thenextblock.com/api/v1/search' \
    --header 'Content-Type: application/json' \
    --data '{
        "question": "What is the Distributed Validators Network, and how many DVT protocols currently exist in the Ethereum staking landscape?",
        "collection": "discord",
        "filters": [],
        "maxdocs": "200",
        "model": "gpt-3.5-turbo-16k"
    }
    '
```

## Response

A successful response returns a success boolean, data object containing the request, response, vector, and debug objects.

```json

```

## Available Chat Logs

### The current database contains chat logs from the following Discord channels:

- #arbitrum
- #thegraph
- #aave
- #compound
- #curve
- #ethereum-rd
- #flashbots
- #uniswap
