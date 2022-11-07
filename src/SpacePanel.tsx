
export function SpacePanel(props: any) {
  return (<div className="panel">
    {props.title} | {props.description} | {props.startsAt} | {props.endsAt}
  </div>
  );
}