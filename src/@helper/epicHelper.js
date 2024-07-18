import { mergeMap, filter, catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";

export const executeEpic = (type, from, successMap, errMap) => (action$) =>
  action$.pipe(
    filter(type.match),
    switchMap((action) =>
      from(action.payload).pipe(
        mergeMap((res) =>
          of(...(successMap ? successMap(res, action.payload) : []))
        ),
        catchError((err) => of(...(errMap ? errMap(err, action.payload) : [])))
      )
    )
  );
