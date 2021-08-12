import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
 public teamMemberSummary():any{
 var teamMemberSummary=[
  {Region:'East',teamMembercount:20,temporalyunvailbalemember:4},
  {Region:'West',teamMembercount:15,temporalyunvailbalemember:8},
  {Region:'South',teamMembercount:17,temporalyunvailbalemember:7},
  {Region:'North',teamMembercount:15,temporalyunvailbalemember:6}
]
 return teamMemberSummary
 }
}
