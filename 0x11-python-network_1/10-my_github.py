#!/usr/bin/python3
"""A script that takes your GitHub credentials
(username and password) and uses the GitHub API
to display your id"""

from requests.auth import HTTPBasicAuth
import requests
import sys

if __name__ == "__main__":
    r = requests.get("https://api.github.com/user",
                     auth=HTTPBasicAuth(sys.argv[1], sys.argv[2]))
    print(r.json().get("id"))
