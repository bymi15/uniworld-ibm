/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
	return {
	    doc: {
            _id: params._id,
            _rev: params._rev,
            title: params.title,
            eventDate: params.eventDate,
            meetingTables: params.meetingTables,
            background: params.background,
            scene: params.scene,
	    }
	};
}
