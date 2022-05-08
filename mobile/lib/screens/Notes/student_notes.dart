import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:sikshyalaya/global/authentication/auth_bloc.dart';
import 'package:sikshyalaya/repository/models/student_note.dart';
import 'package:sikshyalaya/repository/student_note.dart';
import 'package:sikshyalaya/screens/Notes/components/NotePreview.dart';
import 'package:sikshyalaya/components/CustomTextField.dart';
import 'package:sikshyalaya/screens/Notes/note_view.dart';
import 'package:sikshyalaya/screens/Notes/student_notes_bloc.dart';
import 'package:sikshyalaya/screens/Student/student_wrapper.dart';

class StudentNotes extends StatelessWidget {
  const StudentNotes({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StudentWrapper(
      pageName: 'Notes',
      child: BlocProvider(
        create: (context) => StudentNoteBloc(
          studentNoteRepository: StudentNoteRepository(
            token: context.read<AuthBloc>().state.token,
          ),
          userId: context.read<AuthBloc>().state.user!['id'],
        ),
        child: body(context),
      ),
    );
  }

  Widget body(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return BlocBuilder<StudentNoteBloc, StudentNoteState>(
      buildWhen: (((previous, current) => (previous != current))),
      builder: (context, state) {
        return Stack(
          children: [
            Visibility(
              visible: !state.isEditor,
              child: Scaffold(
                  floatingActionButton: Padding(
                    padding: const EdgeInsets.fromLTRB(0, 0, 0, 10),
                    child: FloatingActionButton(
                      onPressed: () => {
                        context.read<StudentNoteBloc>().add(
                              ToggleEditor(
                                mode: 1,
                              ),
                            )
                      },
                      child: const Icon(
                        Icons.add,
                      ),
                      backgroundColor: Theme.of(context).colorScheme.primary,
                    ),
                  ),
                  body: state.isLoaded
                      ? ListView(
                          children: <Widget>[
                            Row(
                              children: <Widget>[
                                Container(
                                  margin:
                                      const EdgeInsets.fromLTRB(20, 30, 0, 30),
                                  child: Text(
                                    'Recent Notes',
                                    style:
                                        Theme.of(context).textTheme.headline5,
                                  ),
                                )
                              ],
                            ),
                            GridView.builder(
                              physics: const NeverScrollableScrollPhysics(),
                              padding: const EdgeInsets.fromLTRB(20, 0, 20, 30),
                              shrinkWrap: true,
                              gridDelegate:
                                  const SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 2,
                                crossAxisSpacing: 20,
                                mainAxisSpacing: 20,
                              ),
                              itemCount: state.recentList.length,
                              itemBuilder: (context, int i) {
                                return GestureDetector(
                                  onTap: () => {
                                    context.read<StudentNoteBloc>().add(
                                          ToggleEditor(
                                            cNote: state.recentList[i],
                                            mode: 2,
                                          ),
                                        ),
                                  },
                                  child: NotePreview(
                                    noteData: state.recentList[i],
                                  ),
                                );
                              },
                            ),
                            Row(
                              children: <Widget>[
                                Container(
                                  margin:
                                      const EdgeInsets.fromLTRB(20, 30, 0, 30),
                                  child: Text(
                                    'Others',
                                    style:
                                        Theme.of(context).textTheme.headline5,
                                  ),
                                )
                              ],
                            ),
                            GridView.builder(
                              physics: const NeverScrollableScrollPhysics(),
                              padding: const EdgeInsets.fromLTRB(20, 0, 20, 30),
                              shrinkWrap: true,
                              gridDelegate:
                                  const SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 2,
                                crossAxisSpacing: 20,
                                mainAxisSpacing: 20,
                              ),
                              itemCount: state.noteList.length,
                              itemBuilder: (context, int i) {
                                return GestureDetector(
                                  onTap: () => {
                                    context.read<StudentNoteBloc>().add(
                                          ToggleEditor(
                                            cNote: state.noteList[i],
                                            mode: 2,
                                          ),
                                        ),
                                  },
                                  child: NotePreview(
                                    noteData: state.noteList[i],
                                  ),
                                );
                              },
                            ),
                          ],
                        )
                      : Container(
                          alignment: Alignment.center,
                          child: CircularProgressIndicator())),
            ),
            Visibility(
              child: Scaffold(
                body: NoteView(
                  noteData: state.currentNote,
                ),
              ),
              visible: state.isEditor,
              maintainState: true,
            ),
          ],
        );
      },
    );
  }
}
