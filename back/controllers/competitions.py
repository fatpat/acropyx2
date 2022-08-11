import logging
from tempfile import NamedTemporaryFile

from models.competitions import Competition, CompetitionResultsExport, CompetitionType

log = logging.getLogger(__name__)

def data_to_csv(data, csv):
    data = list(map(lambda x: f"\"{x}\"" if isinstance(x, str) else str(x), data))
    csv.write(",".join(data).encode())
    csv.write("\n".encode())

class CompCtrl:
    @staticmethod
    def start():
        Competition.createIndexes()

    @staticmethod
    def comp_to_csv(comp:CompetitionResultsExport, type:CompetitionType):
        ret = None
        with NamedTemporaryFile(suffix=".csv", delete=False) as csv:
            ret = csv.name

            if type == CompetitionType.solo:
                data_to_csv(["Rank", "Number", "First Name", "Last Name", "Country", "Gender", "Glider", "Sponsor", "CIVL ID", "Score"], csv)

            if type == CompetitionType.synchro:
                data_to_csv(["Rank", "Team", "Number", "First Name", "Last Name", "Country", "Gender", "Glider", "Sponsor", "CIVL ID", "Score"], csv)

            rank = 0
            for res in comp.overall_results:
                rank += 1
                if type == CompetitionType.solo:
                    data = []
                    data.append(rank) # Rank
                    data.append(rank) # Number
                    data.append(res.pilot.name.split(" ", 1)[0]) # First Name
                    data.append(res.pilot.name.split(" ", 1)[1]) # Last Name (TODO retrieve this first/last name from CIVL, need to ask elena or devlopper)
                    data.append(res.pilot.country.upper()) # Country
                    data.append("M") # Gender (supposed Male and fix manually) (TODO retrieve this from CIVL, see above)
                    data.append("") # Glider  (TODO retrieve from CIVL, see above)
                    data.append("") # Sponsor (TODO retrieve from CIVL, see above)
                    data.append(res.pilot.civlid)
                    data.append(round(res.score, 3))
                    data_to_csv(data, csv)

                if type == CompetitionType.synchro:
                    for pilot in res.team.pilots:
                        data = []
                        data.append(rank) # Rank
                        data.append(res.team.name) # Team
                        data.append(rank) # Number
                        data.append(pilot.name.split(" ", 1)[0]) # First Name
                        data.append(pilot.name.split(" ", 1)[1]) # Last Name (TODO retrieve this first/last name from CIVL, need to ask elena or devlopper)
                        data.append(pilot.country.upper()) # Country
                        data.append("M") # Gender (supposed Male and fix manually) (TODO retrieve this from CIVL, see above)
                        data.append("") # Glider  (TODO retrieve from CIVL, see above)
                        data.append("") # Sponsor (TODO retrieve from CIVL, see above)
                        data.append(pilot.civlid)
                        data.append(round(res.score, 3))
                        data_to_csv(data, csv)

        return ret
