import logging
from tempfile import NamedTemporaryFile

from models.competitions import Competition, CompetitionResultsExport

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
    def comp_to_csv(comp:CompetitionResultsExport):
        ret = None
        with NamedTemporaryFile(suffix=".csv", delete=False) as csv:
            ret = csv.name
            data_to_csv(["CIVL ID", "Name", "Nationality", "Score"], csv)
            for res in comp.overall_results:
                data = []
                data.append(res.pilot.civlid)
                data.append(res.pilot.name)
                data.append(res.pilot.country.upper())
                data.append(round(res.score, 3))
                data_to_csv(data, csv)

        return ret
