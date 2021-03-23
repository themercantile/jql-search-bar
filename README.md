# jql-search-bar
This project is a JS and HTML/CSS app designed to build JQL search terms.

JQL stands for Jira Query Language and is the querying language used in Atlassian's Jira product.

I work with people who are not used to creating complex search queries, so I wanted to create a JS/HTML/CSS application which could concatenate search terms in a manner that was legal to the JQL search engine and also legible to people who may not have a technical background (or a minimal one).

The web page for JQL is https://www.atlassian.com/software/jira/guides/expand-jira/jql

An example of a search query might be:
REPORTER = test_person@domain.com AND STATUS = resolved

This search term wants to find all tickets:
1) reported by the person with the email address test_person@domain.com 
2) whose status is resolved

Every word in that search query aside from the email address is reserved JQL syntax.
