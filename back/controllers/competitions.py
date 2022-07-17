import logging
from tempfile import NamedTemporaryFile

from models.competitions import Competition, CompetitionResultsExport

log = logging.getLogger(__name__)


class CompCtrl:
    @staticmethod
    def start():
        Competition.createIndexes()

    @staticmethod
    def comp_to_csv(comp:CompetitionResultsExport):
        ret = None
        with NamedTemporaryFile(suffix=".csv", delete=False) as csv:
            ret = csv.name
            csv.write("toto\n".encode())

        return ret
