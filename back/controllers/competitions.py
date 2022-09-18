import logging
from tempfile import NamedTemporaryFile
from openpyxl import Workbook

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

    @staticmethod
    def comp_to_xlsx(comp:CompetitionResultsExport, type:CompetitionType):
        ret = None
        wb = Workbook()
        ws = wb.active
        ws.title = f"overall {type}"

        if type == CompetitionType.solo:
            ws.cell(column=1, row=1, value="Rank")
            ws.cell(column=2, row=1, value="Number")
            ws.cell(column=3, row=1, value="First Name")
            ws.cell(column=4, row=1, value="Last Name")
            ws.cell(column=5, row=1, value="Nat")
            ws.cell(column=6, row=1, value="Gender")
            ws.cell(column=7, row=1, value="Glider")
            ws.cell(column=8, row=1, value="Sponsor")
            ws.cell(column=9, row=1, value="CIVL ID")
            ws.cell(column=10, row=1, value="Score")

        if type == CompetitionType.synchro:
            ws.cell(column=1, row=1, value="Rank")
            ws.cell(column=2, row=1, value="Team")
            ws.cell(column=3, row=1, value="Number")
            ws.cell(column=4, row=1, value="First Name")
            ws.cell(column=5, row=1, value="Last Name")
            ws.cell(column=6, row=1, value="Nat")
            ws.cell(column=7, row=1, value="Gender")
            ws.cell(column=8, row=1, value="Glider")
            ws.cell(column=9, row=1, value="Sponsor")
            ws.cell(column=10, row=1, value="CIVL ID")
            ws.cell(column=11, row=1, value="Score")

        rank = 0
        for res in comp.overall_results:
            rank += 1
            score = round(res.score, 3)
            if type == CompetitionType.solo:
                ws.cell(column=1, row=rank+1, value=f"{rank}")
                ws.cell(column=2, row=rank+1, value=f"")
                ws.cell(column=3, row=rank+1, value=res.pilot.name.split(" ", 1)[0])
                ws.cell(column=4, row=rank+1, value=res.pilot.name.split(" ", 1)[1])
                ws.cell(column=5, row=rank+1, value=res.pilot.country.upper())
                ws.cell(column=6, row=rank+1, value=f"M")
                ws.cell(column=7, row=rank+1, value=f"")
                ws.cell(column=8, row=rank+1, value=f"")
                ws.cell(column=9, row=rank+1, value=f"{res.pilot.civlid}")
                ws.cell(column=10, row=rank+1, value=f"{score}")

            if type == CompetitionType.synchro:
                for i, pilot in enumerate(res.team.pilots):
                    ws.cell(column=1, row=rank+1+i, value=f"{rank}")
                    ws.cell(column=2, row=rank+1+i, value=f"{res.team.name}")
                    ws.cell(column=3, row=rank+1+i, value=f"")
                    ws.cell(column=4, row=rank+1+i, value=pilot.name.split(" ", 1)[0])
                    ws.cell(column=5, row=rank+1+i, value=pilot.name.split(" ", 1)[1])
                    ws.cell(column=6, row=rank+1+i, value=pilot.country.upper())
                    ws.cell(column=7, row=rank+1+i, value=f"M")
                    ws.cell(column=8, row=rank+1+i, value=f"")
                    ws.cell(column=9, row=rank+1+i, value=f"")
                    ws.cell(column=10, row=rank+1+i, value=f"{pilot.civlid}")
                    ws.cell(column=11, row=rank+1+i, value=f"{score}")
                ws.merge_cells(start_row=rank+1, start_column=1, end_row=rank+2, end_column=1)
                ws.merge_cells(start_row=rank+1, start_column=2, end_row=rank+2, end_column=2)

                rank += 1

        with NamedTemporaryFile(suffix=".xlsx", delete=False) as xlsx:
            ret = xlsx.name
            wb.save(filename=ret)

        return ret
