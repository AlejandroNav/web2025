import requests

API_KEY = "133fa1a"   # pon tu key

def year_rating_votes_boxoffice(title):
    d = requests.get("https://www.omdbapi.com/", params={"apikey": API_KEY, "t": title}, timeout=10).json()
    if d.get("Response") != "True":
        return None
    votes = None if d.get("imdbVotes") in (None, "N/A") else int(d["imdbVotes"].replace(",", ""))
    box_raw = d.get("BoxOffice")
    box_int = None if box_raw in (None, "N/A") else int(box_raw.replace("$","").replace(",",""))
    return {
        "Title": d.get("Title"),
        "Year": d.get("Year"),
        "imdbRating": d.get("imdbRating"),
        "imdbVotes": votes,
        "BoxOffice": box_int,
    }

print(year_rating_votes_boxoffice("The Matrix 2"))

