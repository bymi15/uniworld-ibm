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
    if (!params.title || !params.eventDate || !params.meetingTables || !params.background || !params.scene) {
        return Promise.reject({ error: 'Missing necessary fields'});
    }
    
    return {
        doc: {
            title: params.title,
            eventDate: params.eventDate || new Date(),
            meetingTables: params.meetingTables,
            background: params.background,
            scene: params.scene,
        }
    };
}
