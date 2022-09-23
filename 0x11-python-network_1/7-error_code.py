#!/usr/bin/python3
"""A script that takes in a URL
sends a request to the URL and
displays the body of the response
"""

import requests
import sys

if __name__ == "__main__":
    r = requests.get(sys.argv[1])
    try:
        r.raise_for_status()
        print(r.text)
    except requests.exceptions.RequestException as error:
        print("Error code: {}".format(r.status_code))
